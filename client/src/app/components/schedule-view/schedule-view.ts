import { Component, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoDirective } from '@jsverse/transloco';
import { ClanDataService } from '../../services/clan-data.service';
import { ExportService } from '../../services/export.service';
import { LanguageService } from '../../services/language-service';
import { SocialService, ScoutMember, TimeSlot } from '../../models/scout.models';
import { DAYS_METADATA } from '../../services/time-utils';

@Component({
  selector: 'app-schedule-view',
  standalone: true,
  imports: [CommonModule, TranslocoDirective],
  templateUrl: './schedule-view.html'
})
export class ScheduleViewComponent {
  clanData = inject(ClanDataService);
  exportService = inject(ExportService);
  langService = inject(LanguageService);

  readonly days = DAYS_METADATA;

  weeklySchedule = computed(() => {
    const services = this.clanData.services();
    const members = this.clanData.members();

    return this.days.map(dayInfo => {
      const items: { service: SocialService; slot: TimeSlot; assigned: ScoutMember[] }[] = [];
      services.forEach(serv => {
        serv.scheduleSlots.filter(s => s.day === dayInfo.id).forEach(slot => {
          items.push({
            service: serv,
            slot,
            assigned: members.filter(m => m.assignedServiceId === serv.id)
          });
        });
      });
      items.sort((a, b) => a.slot.startTime.localeCompare(b.slot.startTime));
      return { dayInfo, items };
    });
  });

  print() {
    this.exportService.triggerPrint();
  }

  getDayTitle(d: typeof DAYS_METADATA[0]): string {
    return this.langService.currentLang === 'it' ? d.labelIt : d.labelEn;
  }
}
