import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoDirective, TranslocoService } from '@jsverse/transloco';
import { ClanDataService } from '../../services/clan-data.service';
import { ScoutMember, SocialService, Commitment } from '../../models/scout.models';
import { TopBarComponent, ActiveTab } from '../../components/top-bar/top-bar';
import { DashboardViewComponent } from '../../components/dashboard-view/dashboard-view';
import { MembersViewComponent } from '../../components/members-view/members-view';
import { ServicesViewComponent } from '../../components/services-view/services-view';
import { MatrixViewComponent } from '../../components/matrix-view/matrix-view';
import { ScheduleViewComponent } from '../../components/schedule-view/schedule-view';
import { MemberModalComponent } from '../../components/modals/member-modal';
import { ServiceModalComponent } from '../../components/modals/service-modal';
import { CommitmentModalComponent } from '../../components/modals/commitment-modal';
import { ImportModalComponent } from '../../components/modals/import-modal';
import { WhatsAppModalComponent } from '../../components/modals/whatsapp-modal';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    TranslocoDirective,
    TopBarComponent,
    DashboardViewComponent,
    MembersViewComponent,
    ServicesViewComponent,
    MatrixViewComponent,
    ScheduleViewComponent,
    MemberModalComponent,
    ServiceModalComponent,
    CommitmentModalComponent,
    ImportModalComponent,
    WhatsAppModalComponent
  ],
  templateUrl: './home.html',
  styles: `
    :host {
      display: block;
      min-height: 100vh;
      background-color: #f8fafc;
    }
  `
})
export class Home {
  clanData = inject(ClanDataService);
  transloco = inject(TranslocoService);

  activeTab = signal<ActiveTab>('dashboard');
  toastMessage = signal<string | null>(null);

  isMemberModalOpen = signal(false);
  isServiceModalOpen = signal(false);
  isCommitmentModalOpen = signal(false);
  isImportModalOpen = signal(false);
  isWhatsAppModalOpen = signal(false);
  isConfirmResetOpen = signal(false);

  editingMember = signal<ScoutMember | null>(null);
  editingService = signal<SocialService | null>(null);
  matrixFocusServiceId = signal<string | null>(null);

  showToast(msg: string) {
    this.toastMessage.set(msg);
    setTimeout(() => {
      if (this.toastMessage() === msg) this.toastMessage.set(null);
    }, 3500);
  }

  openAddMember() {
    this.editingMember.set(null);
    this.isMemberModalOpen.set(true);
  }

  openEditMember(m: ScoutMember) {
    this.editingMember.set(m);
    this.isMemberModalOpen.set(true);
  }

  saveMember(data: Omit<ScoutMember, 'commitments' | 'id'> & { id?: string }) {
    if (data.id) {
      this.clanData.updateMember(data.id, data);
      this.showToast(this.transloco.translate('toasts.memberUpdated'));
    } else {
      this.clanData.addMember({ ...data, commitments: [] });
      this.showToast(this.transloco.translate('toasts.memberAdded'));
    }
    this.isMemberModalOpen.set(false);
  }

  openAddService() {
    this.editingService.set(null);
    this.isServiceModalOpen.set(true);
  }

  openEditService(s: SocialService) {
    this.editingService.set(s);
    this.isServiceModalOpen.set(true);
  }

  saveService(data: Omit<SocialService, 'id'> & { id?: string }) {
    if (data.id) {
      this.clanData.updateService(data.id, data);
      this.showToast(this.transloco.translate('toasts.serviceUpdated'));
    } else {
      this.clanData.addService(data);
      this.showToast(this.transloco.translate('toasts.serviceAdded'));
    }
    this.isServiceModalOpen.set(false);
  }

  saveCommitment(data: Omit<Commitment, 'id'>) {
    const mem = this.editingMember();
    if (!mem) return;
    this.clanData.addCommitment(mem.id, data);
    this.isCommitmentModalOpen.set(false);
    this.showToast(this.transloco.translate('toasts.commitmentAdded'));
  }

  openCommitmentForCurrentScout() {
    const first = this.clanData.members()[0];
    if (first) {
      this.editingMember.set(first);
      this.isCommitmentModalOpen.set(true);
    }
  }

  selectServiceForMatrix(serviceId: string) {
    this.matrixFocusServiceId.set(serviceId);
    this.activeTab.set('matrix');
  }

  runAutoAssign() {
    const res = this.clanData.autoAssign();
    this.showToast(this.transloco.translate('toasts.autoAssignDone', { count: res.assignedCount }));
  }

  async loadSample() {
    await this.clanData.loadSampleData();
    this.showToast(this.transloco.translate('toasts.sampleLoaded'));
  }

  confirmReset() {
    this.clanData.resetAll();
    this.isConfirmResetOpen.set(false);
    this.showToast(this.transloco.translate('toasts.resetDone'));
  }
}
