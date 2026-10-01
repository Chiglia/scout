import { Component, input, output, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoDirective, TranslocoService } from '@jsverse/transloco';
import { ScoutMember, SocialService } from '../../models/scout.models';
import { ClanDataService } from '../../services/clan-data.service';
import { CompatibilityService } from '../../services/compatibility.service';

@Component({
  selector: 'app-member-detail',
  standalone: true,
  imports: [CommonModule, TranslocoDirective],
  templateUrl: './member-detail.html'
})
export class MemberDetailComponent {
  clanData = inject(ClanDataService);
  compatService = inject(CompatibilityService);
  transloco = inject(TranslocoService);

  member = input.required<ScoutMember>();
  edit = output<ScoutMember>();
  delete = output<string>();
  addCommitment = output<void>();
  goToMatrix = output<void>();

  assignedService = computed(() => {
    const sId = this.member().assignedServiceId;
    if (!sId) return undefined;
    return this.clanData.services().find(s => s.id === sId);
  });

  compatibleServices = computed(() => {
    const m = this.member();
    const buffer = this.clanData.bufferMinutes();
    return this.clanData.services().map(service => ({
      service,
      result: this.compatService.check(m, service, buffer)
    }));
  });

  getDayLabel(day: string): string {
    return this.transloco.translate(`days.${day}`) || day;
  }

  assign(serviceId: string) {
    this.clanData.assignMember(this.member().id, serviceId);
  }

  unassign() {
    this.clanData.assignMember(this.member().id, undefined);
  }

  removeCommitment(cId: string) {
    this.clanData.removeCommitment(this.member().id, cId);
  }
}
