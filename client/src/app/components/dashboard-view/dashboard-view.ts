import { Component, inject, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoDirective } from '@jsverse/transloco';
import { ClanDataService } from '../../services/clan-data.service';
import { SocialService, ScoutMember } from '../../models/scout.models';
import { DAYS_METADATA } from '../../services/time-utils';

@Component({
  selector: 'app-dashboard-view',
  standalone: true,
  imports: [CommonModule, TranslocoDirective],
  templateUrl: './dashboard-view.html'
})
export class DashboardViewComponent {
  clanData = inject(ClanDataService);

  goToMatrix = output<void>();
  goToMembers = output<void>();
  goToServices = output<void>();
  openImport = output<void>();
  autoAssign = output<void>();
  openAddMember = output<void>();

  getAssignedScouts(serviceId: string): ScoutMember[] {
    return this.clanData.members().filter(m => m.assignedServiceId === serviceId);
  }

  getService(serviceId?: string): SocialService | undefined {
    if (!serviceId) return undefined;
    return this.clanData.services().find(s => s.id === serviceId);
  }

  getDayShort(day: string): string {
    return DAYS_METADATA.find(d => d.id === day)?.shortIt || day;
  }
}
