import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClanDataService } from '../../services/clan-data.service';
import { CompatibilityService } from '../../services/compatibility.service';
import { ScoutMember, SocialService } from '../../models/scout.models';
import { DAYS_METADATA } from '../../services/time-utils';

@Component({
  selector: 'app-matrix-grid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './matrix-grid.html'
})
export class MatrixGridComponent {
  clanData = inject(ClanDataService);
  compatService = inject(CompatibilityService);

  checkCompat(m: ScoutMember, s: SocialService) {
    return this.compatService.check(m, s, this.clanData.bufferMinutes());
  }

  assignScout(memberId: string, serviceId: string) {
    this.clanData.assignMember(memberId, serviceId);
  }

  unassignScout(memberId: string) {
    this.clanData.assignMember(memberId, undefined);
  }

  getDayShort(day: string): string {
    return DAYS_METADATA.find(d => d.id === day)?.shortIt || day;
  }
}
