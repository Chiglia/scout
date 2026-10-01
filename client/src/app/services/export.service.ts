import { Injectable } from '@angular/core';
import { ScoutMember, SocialService } from '../models/scout.models';
import { DAYS_METADATA } from './time-utils';

@Injectable({
  providedIn: 'root'
})
export class ExportService {
  generateWhatsAppSummary(members: ScoutMember[], services: SocialService[], bufferMinutes: number): string {
    let text = `⚜️ *ASSEGNAZIONE SERVIZI CLAN* ⚜️\n`;
    text += `_Verificata con buffer spostamenti di ${bufferMinutes} min_\n\n`;

    services.forEach(service => {
      const assigned = members.filter(m => m.assignedServiceId === service.id);
      const slotsStr = service.scheduleSlots.map(slot => {
        const dayLabel = DAYS_METADATA.find(d => d.id === slot.day)?.labelIt || slot.day;
        return `${dayLabel} ${slot.startTime}-${slot.endTime}`;
      }).join(', ');

      text += `📌 *${service.name}* (${service.organization})\n`;
      text += `🕒 Orario: ${slotsStr}\n`;
      text += `📍 Luogo: ${service.location}\n`;
      text += `👥 Posti richiesti: ${service.requiredCapacity}\n`;

      if (assigned.length > 0) {
        text += `👉 Rover & Scolte assegnati:\n`;
        assigned.forEach(s => {
          text += `   • ${s.name} ${s.surname} (${s.role.toUpperCase()})\n`;
        });
      } else {
        text += `⚠️ _Nessun ragazzo ancora assegnato_\n`;
      }
      text += `\n`;
    });

    const unassigned = members.filter(m => !m.assignedServiceId);
    if (unassigned.length > 0) {
      text += `⏳ *Ragazzi ancora senza servizio (${unassigned.length}):*\n`;
      unassigned.forEach(u => {
        text += `• ${u.name} ${u.surname}\n`;
      });
      text += `\n`;
    }

    text += `Buona Strada! 🏕️`;
    return text;
  }

  copyToClipboard(text: string): Promise<void> {
    return navigator.clipboard.writeText(text);
  }

  triggerPrint(): void {
    window.print();
  }
}
