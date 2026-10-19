import { Component, output, input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslocoDirective } from '@jsverse/transloco';
import { ScoutMember } from '../../models/scout.models';

@Component({
  selector: 'app-member-modal',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslocoDirective],
  templateUrl: './member-modal.html'
})
export class MemberModalComponent implements OnInit {
  member = input<ScoutMember | null>(null);

  close = output<void>();
  save = output<Omit<ScoutMember, 'commitments' | 'id'> & { id?: string }>();

  formData = {
    id: undefined as string | undefined,
    name: '',
    surname: '',
    notes: ''
  };

  ngOnInit() {
    const m = this.member();
    if (m) {
      this.formData = {
        id: m.id,
        name: m.name,
        surname: m.surname,
        notes: m.notes || ''
      };
    }
  }

  submit() {
    if (!this.formData.name.trim()) return;
    this.save.emit(this.formData);
  }
}
