import { Component, inject, signal, computed, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslocoDirective, TranslocoService } from '@jsverse/transloco';
import { ClanDataService } from '../../services/clan-data.service';
import { ScoutMember, SocialService } from '../../models/scout.models';
import { MemberDetailComponent } from './member-detail';

@Component({
  selector: 'app-members-view',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslocoDirective, MemberDetailComponent],
  templateUrl: './members-view.html'
})
export class MembersViewComponent {
  clanData = inject(ClanDataService);
  transloco = inject(TranslocoService);

  openAddMember = output<void>();
  openEditMember = output<ScoutMember>();
  openImport = output<void>();
  openAddCommitment = output<void>();
  goToMatrix = output<void>();

  searchQuery = signal<string>('');
  roleFilter = signal<string>('all');
  assignedFilter = signal<string>('all');
  selectedMemberId = signal<string | null>(null);

  filteredMembers = computed(() => {
    const list = this.clanData.members();
    const q = this.searchQuery().toLowerCase().trim();
    const roleF = this.roleFilter();
    const assignedF = this.assignedFilter();

    return list.filter(m => {
      const matchQ = !q || `${m.name} ${m.surname}`.toLowerCase().includes(q);
      const matchRole = roleF === 'all' || m.role === roleF;
      const matchAssigned = assignedF === 'all' ? true : (assignedF === 'assigned' ? !!m.assignedServiceId : !m.assignedServiceId);
      return matchQ && matchRole && matchAssigned;
    });
  });

  selectedMember = computed(() => {
    const id = this.selectedMemberId();
    if (!id) return this.clanData.members()[0] || null;
    return this.clanData.members().find(m => m.id === id) || null;
  });

  constructor() {
    const first = this.clanData.members()[0];
    if (first) this.selectedMemberId.set(first.id);
  }

  getService(serviceId?: string): SocialService | undefined {
    if (!serviceId) return undefined;
    return this.clanData.services().find(s => s.id === serviceId);
  }

  deleteMember(id: string) {
    const m = this.clanData.members().find(item => item.id === id);
    if (!m) return;
    const confirmMsg = this.transloco.translate('members.deleteConfirm', { name: `${m.name} ${m.surname}` });
    if (confirm(confirmMsg)) {
      this.clanData.deleteMember(id);
      const remaining = this.clanData.members()[0];
      this.selectedMemberId.set(remaining ? remaining.id : null);
    }
  }
}
