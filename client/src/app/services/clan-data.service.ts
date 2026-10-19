import { Injectable, inject, signal, computed } from '@angular/core';
import { DayOfWeek, ScoutMember, SocialService, Commitment, ClanStatistics } from '../models/scout.models';
import { CompatibilityService } from './compatibility.service';
import { CsvImportService, CsvImportResult } from './csv-import.service';
import { DAYS_METADATA, TimeUtils } from './time-utils';

const STORAGE_MEMBERS_KEY = 'scout_clan_members_v3';
const STORAGE_SERVICES_KEY = 'scout_clan_services_v3';
const STORAGE_BUFFER_KEY = 'scout_clan_buffer_v3';
const DAY_START_MINUTES = 7 * 60;
const DAY_END_MINUTES = 22 * 60 + 30;

@Injectable({
  providedIn: 'root'
})
export class ClanDataService {
  private compatService = inject(CompatibilityService);
  private csvService = inject(CsvImportService);

  readonly members = signal<ScoutMember[]>([]);
  readonly services = signal<SocialService[]>([]);
  readonly bufferMinutes = signal<number>(15);

  readonly statistics = computed<ClanStatistics>(() => {
    const mems = this.members();
    const servs = this.services();
    const buffer = this.bufferMinutes();

    const totalCapacityNeeded = servs.reduce((acc, s) => acc + (s.requiredCapacity || 0), 0);
    const assignedCount = mems.filter(m => !!m.assignedServiceId).length;
    const unassignedCount = mems.length - assignedCount;

    let totalPairs = 0;
    let compatiblePairs = 0;
    for (const m of mems) {
      for (const s of servs) {
        totalPairs++;
        if (this.compatService.check(m, s, buffer).isCompatible) compatiblePairs++;
      }
    }

    return {
      totalMembers: mems.length,
      totalServices: servs.length,
      totalCapacityNeeded,
      assignedCount,
      unassignedCount,
      averageCompatibilityRate: totalPairs > 0 ? Math.round((compatiblePairs / totalPairs) * 100) : 0
    };
  });

  constructor() {
    this.loadFromStorage();
  }

  private loadFromStorage() {
    try {
      const savedMembers = localStorage.getItem(STORAGE_MEMBERS_KEY);
      const savedServices = localStorage.getItem(STORAGE_SERVICES_KEY);
      const savedBuffer = localStorage.getItem(STORAGE_BUFFER_KEY);
      if (savedBuffer) this.bufferMinutes.set(parseInt(savedBuffer, 10) || 15);
      if (savedMembers && savedServices) {
        const normalizedMembers = this.normalizeMembers(JSON.parse(savedMembers));
        this.members.set(normalizedMembers);
        this.services.set(JSON.parse(savedServices));
        localStorage.setItem(STORAGE_MEMBERS_KEY, JSON.stringify(normalizedMembers));
      } else {
        this.members.set([]);
        this.services.set([]);
      }
    } catch {
      this.members.set([]);
      this.services.set([]);
    }
  }

  saveToStorage() {
    try {
      localStorage.setItem(STORAGE_MEMBERS_KEY, JSON.stringify(this.members()));
      localStorage.setItem(STORAGE_SERVICES_KEY, JSON.stringify(this.services()));
      localStorage.setItem(STORAGE_BUFFER_KEY, this.bufferMinutes().toString());
    } catch (e) {
      console.error('Storage error:', e);
    }
  }

  setBuffer(mins: number) {
    this.bufferMinutes.set(mins);
    this.saveToStorage();
  }

  addMember(member: Omit<ScoutMember, 'id'>): ScoutMember {
    const newMember: ScoutMember = {
      ...member,
      id: 'm_' + Date.now() + '_' + Math.random().toString(36).substring(2, 6)
    };
    this.members.update(l => [...l, newMember]);
    this.saveToStorage();
    return newMember;
  }

  updateMember(id: string, updates: Partial<ScoutMember>) {
    this.members.update(l => l.map(m => m.id === id ? { ...m, ...updates } : m));
    this.saveToStorage();
  }

  deleteMember(id: string) {
    this.members.update(l => l.filter(m => m.id !== id));
    this.saveToStorage();
  }

  addCommitment(memberId: string, commitment: Omit<Commitment, 'id'>) {
    const c: Commitment = {
      ...commitment,
      id: 'c_' + Date.now() + '_' + Math.random().toString(36).substring(2, 5)
    };
    this.members.update(l => l.map(m => m.id === memberId ? { ...m, commitments: [...m.commitments, c] } : m));
    this.saveToStorage();
  }

  removeCommitment(memberId: string, commitmentId: string) {
    this.members.update(l => l.map(m => m.id === memberId ? { ...m, commitments: m.commitments.filter(c => c.id !== commitmentId) } : m));
    this.saveToStorage();
  }

  invertAllMembersCommitments() {
    this.members.update(members => members.map(member => {
      let invertedMember = member;
      for (const { id: day } of DAYS_METADATA) {
        invertedMember = this.invertMemberDay(invertedMember, day);
      }
      return invertedMember;
    }));
    this.saveToStorage();
  }

  private invertMemberDay(member: ScoutMember, day: DayOfWeek): ScoutMember {
    const dayCommitments = member.commitments.filter(commitment => commitment.day === day);
    const outsideCommitments: Commitment[] = [];
    const busySlots: { start: number; end: number }[] = [];

    for (const commitment of dayCommitments) {
      const start = TimeUtils.timeToMinutes(commitment.startTime);
      const end = TimeUtils.timeToMinutes(commitment.endTime);
      if (!Number.isFinite(start) || !Number.isFinite(end) || end <= start) {
        outsideCommitments.push(commitment);
        continue;
      }
      if (end <= DAY_START_MINUTES || start >= DAY_END_MINUTES) {
        outsideCommitments.push(commitment);
        continue;
      }

      if (start < DAY_START_MINUTES) {
        const outsideEnd = Math.min(end, DAY_START_MINUTES);
        if (outsideEnd > start) {
          outsideCommitments.push({
            ...commitment,
            id: this.createCommitmentId(),
            endTime: this.minutesToCommitmentTime(outsideEnd)
          });
        }
      }
      if (end > DAY_END_MINUTES) {
        const outsideStart = Math.max(start, DAY_END_MINUTES);
        if (end > outsideStart) {
          outsideCommitments.push({
            ...commitment,
            id: this.createCommitmentId(),
            startTime: this.minutesToCommitmentTime(outsideStart)
          });
        }
      }

      const busyStart = Math.max(start, DAY_START_MINUTES);
      const busyEnd = Math.min(end, DAY_END_MINUTES);
      if (busyEnd > busyStart) busySlots.push({ start: busyStart, end: busyEnd });
    }

    busySlots.sort((a, b) => a.start - b.start);
    const mergedSlots: { start: number; end: number }[] = [];
    for (const slot of busySlots) {
      const previous = mergedSlots[mergedSlots.length - 1];
      if (previous && slot.start <= previous.end) {
        previous.end = Math.max(previous.end, slot.end);
      } else {
        mergedSlots.push({ ...slot });
      }
    }

    const invertedCommitments: Commitment[] = [];
    let freeStart = DAY_START_MINUTES;
    for (const slot of mergedSlots) {
      if (slot.start > freeStart) {
        invertedCommitments.push(this.createInvertedCommitment(day, freeStart, slot.start));
      }
      freeStart = Math.max(freeStart, slot.end);
    }
    if (freeStart < DAY_END_MINUTES) {
      invertedCommitments.push(this.createInvertedCommitment(day, freeStart, DAY_END_MINUTES));
    }

    const firstDayIndex = member.commitments.findIndex(commitment => commitment.day === day);
    const insertAt = firstDayIndex < 0
      ? member.commitments.length
      : member.commitments.slice(0, firstDayIndex).filter(commitment => commitment.day !== day).length;
    const commitments = member.commitments.filter(commitment => commitment.day !== day);
    commitments.splice(insertAt, 0, ...outsideCommitments, ...invertedCommitments);
    return { ...member, commitments };
  }

  private createInvertedCommitment(day: DayOfWeek, start: number, end: number): Commitment {
    return {
      id: this.createCommitmentId('c_inv'),
      day,
      startTime: TimeUtils.minutesToTime(start),
      endTime: TimeUtils.minutesToTime(end)
    };
  }

  private minutesToCommitmentTime(minutes: number): string {
    return minutes === 24 * 60 ? '24:00' : TimeUtils.minutesToTime(minutes);
  }

  private createCommitmentId(prefix = 'c'): string {
    return `${prefix}_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
  }

  private normalizeMembers(members: ScoutMember[]): ScoutMember[] {
    return members.map(member => ({
      id: member.id,
      name: member.name,
      surname: member.surname,
      notes: member.notes,
      commitments: member.commitments.map(commitment => {
        const { name: _name, category: _category, ...normalizedCommitment } =
          commitment as Commitment & { name?: string; category?: string };
        return normalizedCommitment;
      }),
      assignedServiceId: member.assignedServiceId
    }));
  }

  addService(service: Omit<SocialService, 'id'>): SocialService {
    const s: SocialService = {
      ...service,
      id: 's_' + Date.now() + '_' + Math.random().toString(36).substring(2, 6)
    };
    this.services.update(l => [...l, s]);
    this.saveToStorage();
    return s;
  }

  updateService(id: string, updates: Partial<SocialService>) {
    this.services.update(l => l.map(s => s.id === id ? { ...s, ...updates } : s));
    this.saveToStorage();
  }

  deleteService(id: string) {
    this.members.update(l => l.map(m => m.assignedServiceId === id ? { ...m, assignedServiceId: undefined } : m));
    this.services.update(l => l.filter(s => s.id !== id));
    this.saveToStorage();
  }

  assignMember(memberId: string, serviceId?: string) {
    this.members.update(l => l.map(m => m.id === memberId ? { ...m, assignedServiceId: serviceId } : m));
    this.saveToStorage();
  }

  unassignAll() {
    this.members.update(l => l.map(m => ({ ...m, assignedServiceId: undefined })));
    this.saveToStorage();
  }

  autoAssign(): { assignedCount: number; unassignedCount: number } {
    const plan = this.compatService.computeOptimalAssignments(
      this.members(),
      this.services(),
      this.bufferMinutes()
    );
    this.members.update(l => l.map(m => ({ ...m, assignedServiceId: plan[m.id] || undefined })));
    this.saveToStorage();
    const assignedCount = Object.keys(plan).length;
    return { assignedCount, unassignedCount: this.members().length - assignedCount };
  }

  importCsv(text: string): CsvImportResult {
    const res = this.csvService.parse(text, this.members());
    this.members.set(res.updatedMembers);
    this.saveToStorage();
    return res;
  }

  async loadSampleData(): Promise<void> {
    try {
      const [membersRes, servicesRes] = await Promise.all([
        fetch('data/sample-members.json'),
        fetch('data/sample-services.json')
      ]);
      const members = await membersRes.json();
      const services = await servicesRes.json();
      this.members.set(this.normalizeMembers(members));
      this.services.set(services);
      this.bufferMinutes.set(15);
      this.saveToStorage();
    } catch (e) {
      console.error('Failed to load sample json data:', e);
    }
  }

  resetAll() {
    this.members.set([]);
    this.services.set([]);
    this.saveToStorage();
  }
}
