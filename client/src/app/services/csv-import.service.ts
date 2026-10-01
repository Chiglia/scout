import { Injectable } from '@angular/core';
import { ScoutMember, Commitment, CommitmentCategory } from '../models/scout.models';
import { TimeUtils } from './time-utils';

export interface CsvImportResult {
  importedMembersCount: number;
  importedCommitmentsCount: number;
  errors: string[];
  updatedMembers: ScoutMember[];
}

@Injectable({
  providedIn: 'root'
})
export class CsvImportService {
  parse(csvText: string, existingMembers: ScoutMember[]): CsvImportResult {
    const lines = csvText.trim().split(/\r?\n/);
    const errors: string[] = [];
    if (lines.length === 0) {
      return { importedMembersCount: 0, importedCommitmentsCount: 0, errors: ['Testo vuoto'], updatedMembers: existingMembers };
    }

    const memberMap = new Map<string, { member: ScoutMember; commitments: Commitment[] }>();
    for (const m of existingMembers) {
      const key = `${m.name.trim().toLowerCase()} ${m.surname.trim().toLowerCase()}`;
      memberMap.set(key, { member: { ...m }, commitments: [...m.commitments] });
    }

    let importedCommitmentsCount = 0;
    let newMembersCount = 0;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      if (!line || line.toLowerCase().startsWith('nome') || line.toLowerCase().startsWith('name')) {
        continue;
      }

      let delimiter = ',';
      if (line.includes('\t')) delimiter = '\t';
      else if (line.includes(';')) delimiter = ';';

      const parts = line.split(delimiter).map(p => p.trim());
      if (parts.length < 4) {
        errors.push(`Riga ${i + 1} ignorata: servono almeno 4 colonne.`);
        continue;
      }

      const name = parts[0];
      const surname = parts.length >= 5 ? parts[1] : '';
      const rawDay = parts.length >= 5 ? parts[2] : parts[1];
      const rawStart = parts.length >= 5 ? parts[3] : parts[2];
      const rawEnd = parts.length >= 5 ? parts[4] : parts[3];
      const activity = parts.length >= 6 ? parts[5] : (parts.length === 5 ? 'Impegno' : parts[4] || 'Impegno');

      const parsedDay = TimeUtils.normalizeDay(rawDay);
      if (!parsedDay) {
        errors.push(`Riga ${i + 1}: Giorno "${rawDay}" non riconosciuto.`);
        continue;
      }

      const startTime = TimeUtils.normalizeTime(rawStart);
      const endTime = TimeUtils.normalizeTime(rawEnd);
      if (!startTime || !endTime) {
        errors.push(`Riga ${i + 1}: Orari non validi (${rawStart} - ${rawEnd}).`);
        continue;
      }

      const key = `${name.toLowerCase()} ${surname.toLowerCase()}`.trim();
      let record = memberMap.get(key);

      if (!record) {
        const newM: ScoutMember = {
          id: 'm_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7),
          name,
          surname,
          role: 'rover',
          year: 1,
          commitments: []
        };
        record = { member: newM, commitments: [] };
        memberMap.set(key, record);
        newMembersCount++;
      }

      record.commitments.push({
        id: 'c_' + Date.now() + '_' + Math.random().toString(36).substring(2, 6),
        name: activity,
        day: parsedDay,
        startTime,
        endTime,
        category: this.guessCategory(activity)
      });
      importedCommitmentsCount++;
    }

    const updatedMembers = Array.from(memberMap.values()).map(r => ({
      ...r.member,
      commitments: r.commitments
    }));

    return {
      importedMembersCount: newMembersCount,
      importedCommitmentsCount,
      errors,
      updatedMembers
    };
  }

  private guessCategory(activity: string): CommitmentCategory {
    const s = (activity || '').toLowerCase();
    if (s.includes('scuola') || s.includes('lezione') || s.includes('liceo')) return 'school';
    if (s.includes('uni') || s.includes('studio') || s.includes('esame')) return 'university';
    if (s.includes('calcio') || s.includes('palestra') || s.includes('volley') || s.includes('nuoto') || s.includes('sport') || s.includes('basket')) return 'sport';
    if (s.includes('lavoro') || s.includes('stage') || s.includes('turno')) return 'work';
    if (s.includes('scout') || s.includes('clan') || s.includes('reparto')) return 'scout';
    if (s.includes('famiglia') || s.includes('cena')) return 'family';
    if (s.includes('parrocchia') || s.includes('chiesa')) return 'parish';
    return 'other';
  }
}
