import { Component, output, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoDirective } from '@jsverse/transloco';
import { ClanDataService } from '../../services/clan-data.service';
import { ExportService } from '../../services/export.service';

@Component({
  selector: 'app-whatsapp-modal',
  standalone: true,
  imports: [CommonModule, TranslocoDirective],
  templateUrl: './whatsapp-modal.html'
})
export class WhatsAppModalComponent {
  clanData = inject(ClanDataService);
  exportService = inject(ExportService);

  close = output<void>();
  copied = output<void>();

  text = computed(() => {
    return this.exportService.generateWhatsAppSummary(
      this.clanData.members(),
      this.clanData.services(),
      this.clanData.bufferMinutes()
    );
  });

  copy() {
    this.exportService.copyToClipboard(this.text()).then(() => {
      this.copied.emit();
    });
  }
}
