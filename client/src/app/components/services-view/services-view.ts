import { Component, inject, signal, computed, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslocoDirective } from '@jsverse/transloco';
import { ClanDataService } from '../../services/clan-data.service';
import { SocialService, ScoutMember } from '../../models/scout.models';
import { DAYS_METADATA } from '../../services/time-utils';

@Component({
  selector: 'app-services-view',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslocoDirective],
  templateUrl: './services-view.html'
})
export class ServicesViewComponent {
  clanData = inject(ClanDataService);

  openAddService = output<void>();
  openEditService = output<SocialService>();
  selectServiceForMatrix = output<string>();

  searchQuery = signal<string>('');
  categoryFilter = signal<string>('all');

  filteredServices = computed(() => {
    const list = this.clanData.services();
    const q = this.searchQuery().toLowerCase().trim();
    const cat = this.categoryFilter();
    return list.filter(s => {
      const matchQ = !q || `${s.name} ${s.organization} ${s.location}`.toLowerCase().includes(q);
      const matchCat = cat === 'all' || s.category === cat;
      return matchQ && matchCat;
    });
  });

  getAssignedScouts(serviceId: string): ScoutMember[] {
    return this.clanData.members().filter(m => m.assignedServiceId === serviceId);
  }

  getDayLabel(day: string): string {
    return DAYS_METADATA.find(d => d.id === day)?.labelIt || day;
  }

  deleteService(id: string) {
    const s = this.clanData.services().find(item => item.id === id);
    if (!s) return;
    if (confirm(`Eliminare il servizio "${s.name}"?`)) {
      this.clanData.deleteService(id);
    }
  }

  unassignScout(memberId: string) {
    this.clanData.assignMember(memberId, undefined);
  }
}
