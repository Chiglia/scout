import { Component, output, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslocoDirective } from '@jsverse/transloco';
import { Commitment, CommitmentCategory, DayOfWeek } from '../../models/scout.models';

@Component({
  selector: 'app-commitment-modal',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslocoDirective],
  templateUrl: './commitment-modal.html'
})
export class CommitmentModalComponent {
  scoutName = input<string>('');

  close = output<void>();
  save = output<Omit<Commitment, 'id'>>();

  formData = {
    name: '',
    day: 'monday' as DayOfWeek,
    startTime: '16:00',
    endTime: '18:00',
    category: 'university' as CommitmentCategory,
    notes: ''
  };

  submit() {
    if (!this.formData.name.trim() || this.formData.startTime >= this.formData.endTime) return;
    this.save.emit(this.formData);
  }
}
