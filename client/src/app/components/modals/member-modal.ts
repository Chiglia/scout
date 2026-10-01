import { Component, output, input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslocoDirective } from '@jsverse/transloco';
import { ScoutMember, ScoutRole } from '../../models/scout.models';

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
    role: 'rover' as ScoutRole,
    year: 1,
    phone: '',
    email: '',
    notes: ''
  };

  ngOnInit() {
    const m = this.member();
    if (m) {
      this.formData = {
        id: m.id,
        name: m.name,
        surname: m.surname,
        role: m.role,
        year: m.year || 1,
        phone: m.phone || '',
        email: m.email || '',
        notes: m.notes || ''
      };
    }
  }

  submit() {
    if (!this.formData.name.trim()) return;
    this.save.emit(this.formData);
  }
}
