import { Component, inject, signal, computed, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoDirective } from '@jsverse/transloco';
import { ClanDataService } from '../../services/clan-data.service';
import { CompatibilityService } from '../../services/compatibility.service';
import { ScoutMember, SocialService } from '../../models/scout.models';
import { MatrixGridComponent } from './matrix-grid';

export type MatrixSubView = 'grid' | 'byMember' | 'byService';

@Component({
  selector: 'app-matrix-view',
  standalone: true,
  imports: [CommonModule, TranslocoDirective, MatrixGridComponent],
  templateUrl: './matrix-view.html'
})
export class MatrixViewComponent {
  clanData = inject(ClanDataService);
  compatService = inject(CompatibilityService);

  initialServiceId = input<string | null>(null);
  autoAssign = output<void>();

  matrixSubView = signal<MatrixSubView>('grid');
  selectedMemberId = signal<string | null>(null);
  selectedServiceId = signal<string | null>(null);

  selectedMember = computed(() => {
    const id = this.selectedMemberId();
    if (!id) return this.clanData.members()[0] || null;
    return this.clanData.members().find(m => m.id === id) || null;
  });

  selectedService = computed(() => {
    const id = this.selectedServiceId() || this.initialServiceId();
    if (!id) return this.clanData.services()[0] || null;
    return this.clanData.services().find(s => s.id === id) || null;
  });

  selectedMemberCompatibility = computed(() => {
    const m = this.selectedMember();
    if (!m) return [];
    const buffer = this.clanData.bufferMinutes();
    return this.clanData.services().map(service => ({
      service,
      result: this.compatService.check(m, service, buffer)
    }));
  });

  selectedServiceCompatibility = computed(() => {
    const s = this.selectedService();
    if (!s) return [];
    const buffer = this.clanData.bufferMinutes();
    return this.clanData.members().map(member => ({
      member,
      result: this.compatService.check(member, s, buffer),
      isAssigned: member.assignedServiceId === s.id
    }));
  });

  constructor() {
    const firstM = this.clanData.members()[0];
    if (firstM) this.selectedMemberId.set(firstM.id);
    const firstS = this.clanData.services()[0];
    if (firstS) this.selectedServiceId.set(firstS.id);
  }

  assignScout(memberId: string, serviceId: string) {
    this.clanData.assignMember(memberId, serviceId);
  }

  getAssignedScouts(serviceId: string): ScoutMember[] {
    return this.clanData.members().filter(m => m.assignedServiceId === serviceId);
  }
}
