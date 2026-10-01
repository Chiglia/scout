import { Component, output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslocoDirective } from '@jsverse/transloco';
import { ClanDataService } from '../../services/clan-data.service';
import { CsvImportResult } from '../../services/csv-import.service';

@Component({
  selector: 'app-import-modal',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslocoDirective],
  templateUrl: './import-modal.html'
})
export class ImportModalComponent {
  clanData = inject(ClanDataService);

  close = output<void>();
  loadDemo = output<void>();

  csvText = '';
  importResult: CsvImportResult | null = null;

  process() {
    if (!this.csvText.trim()) return;
    this.importResult = this.clanData.importCsv(this.csvText);
  }
}
