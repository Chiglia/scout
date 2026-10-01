import { DayOfWeek } from '../models/scout.models';

export interface DayMetadata {
  id: DayOfWeek;
  labelIt: string;
  labelEn: string;
  shortIt: string;
  shortEn: string;
}

export const DAYS_METADATA: DayMetadata[] = [
  { id: 'monday', labelIt: 'Lunedì', labelEn: 'Monday', shortIt: 'Lun', shortEn: 'Mon' },
  { id: 'tuesday', labelIt: 'Martedì', labelEn: 'Tuesday', shortIt: 'Mar', shortEn: 'Tue' },
  { id: 'wednesday', labelIt: 'Mercoledì', labelEn: 'Wednesday', shortIt: 'Mer', shortEn: 'Wed' },
  { id: 'thursday', labelIt: 'Giovedì', labelEn: 'Thursday', shortIt: 'Gio', shortEn: 'Thu' },
  { id: 'friday', labelIt: 'Venerdì', labelEn: 'Friday', shortIt: 'Ven', shortEn: 'Fri' },
  { id: 'saturday', labelIt: 'Sabato', labelEn: 'Saturday', shortIt: 'Sab', shortEn: 'Sat' },
  { id: 'sunday', labelIt: 'Domenica', labelEn: 'Sunday', shortIt: 'Dom', shortEn: 'Sun' }
];

export class TimeUtils {
  static timeToMinutes(timeStr: string): number {
    if (!timeStr) return 0;
    const parts = timeStr.trim().split(':');
    const hours = parseInt(parts[0] || '0', 10);
    const minutes = parseInt(parts[1] || '0', 10);
    return hours * 60 + minutes;
  }

  static minutesToTime(totalMins: number): string {
    const bounded = Math.max(0, Math.min(24 * 60 - 1, totalMins));
    const h = Math.floor(bounded / 60);
    const m = bounded % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`;
  }

  static doSlotsOverlap(
    slotA: { day: DayOfWeek; startTime: string; endTime: string },
    slotB: { day: DayOfWeek; startTime: string; endTime: string },
    bufferMin = 0
  ): boolean {
    if (slotA.day !== slotB.day) return false;

    const startA = this.timeToMinutes(slotA.startTime);
    const endA = this.timeToMinutes(slotA.endTime);
    const startB = this.timeToMinutes(slotB.startTime);
    const endB = this.timeToMinutes(slotB.endTime);

    const bufferedStartA = Math.max(0, startA - bufferMin);
    const bufferedEndA = Math.min(24 * 60, endA + bufferMin);

    return bufferedStartA < endB && startB < bufferedEndA;
  }

  static normalizeDay(raw: string): DayOfWeek | null {
    const s = raw.toLowerCase().trim();
    if (s.startsWith('lun') || s.startsWith('mon')) return 'monday';
    if (s.startsWith('mar') || s.startsWith('tue')) return 'tuesday';
    if (s.startsWith('mer') || s.startsWith('wed')) return 'wednesday';
    if (s.startsWith('gio') || s.startsWith('thu')) return 'thursday';
    if (s.startsWith('ven') || s.startsWith('fri')) return 'friday';
    if (s.startsWith('sab') || s.startsWith('sat')) return 'saturday';
    if (s.startsWith('dom') || s.startsWith('sun')) return 'sunday';
    return null;
  }

  static normalizeTime(raw: string): string | null {
    if (!raw) return null;
    const clean = raw.trim().replace('.', ':');
    const match = clean.match(/^(\d{1,2}):?(\d{2})?$/);
    if (!match) return null;
    const h = parseInt(match[1], 10);
    const m = match[2] ? parseInt(match[2], 10) : 0;
    if (h < 0 || h > 23 || m < 0 || m > 59) return null;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`;
  }
}
