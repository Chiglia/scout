import { Component, output, input, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslocoDirective, TranslocoService } from '@jsverse/transloco';
import { SocialService, ServiceCategory, TimeSlot, DayOfWeek } from '../../models/scout.models';
import { DAYS_METADATA } from '../../services/time-utils';

@Component({
  selector: 'app-service-modal',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslocoDirective],
  templateUrl: './service-modal.html'
})
export class ServiceModalComponent implements OnInit {
  transloco = inject(TranslocoService);

  service = input<SocialService | null>(null);
  close = output<void>();
  save = output<Omit<SocialService, 'id'> & { id?: string }>();

  readonly days = DAYS_METADATA;

  formData = {
    id: undefined as string | undefined,
    name: '',
    organization: '',
    category: 'poverty' as ServiceCategory,
    description: '',
    location: '',
    contactPerson: '',
    contactPhone: '',
    requiredCapacity: 2,
    color: '#2563EB',
    scheduleSlots: [] as TimeSlot[]
  };

  newSlotDay: DayOfWeek = 'monday';
  newSlotStart = '16:30';
  newSlotEnd = '18:30';

  ngOnInit() {
    const s = this.service();
    if (s) {
      this.formData = {
        id: s.id,
        name: s.name,
        organization: s.organization,
        category: s.category,
        description: s.description,
        location: s.location,
        contactPerson: s.contactPerson || '',
        contactPhone: s.contactPhone || '',
        requiredCapacity: s.requiredCapacity,
        color: s.color || '#2563EB',
        scheduleSlots: [...s.scheduleSlots]
      };
    } else {
      this.formData.scheduleSlots = [{ day: 'tuesday', startTime: '16:30', endTime: '18:30' }];
    }
  }

  addSlot() {
    if (this.newSlotStart >= this.newSlotEnd) return;
    this.formData.scheduleSlots.push({
      day: this.newSlotDay,
      startTime: this.newSlotStart,
      endTime: this.newSlotEnd
    });
  }

  removeSlot(index: number) {
    this.formData.scheduleSlots.splice(index, 1);
  }

  submit() {
    if (!this.formData.name.trim() || this.formData.scheduleSlots.length === 0) return;
    this.save.emit(this.formData);
  }

  getDayLabel(d: DayOfWeek): string {
    return this.transloco.translate(`days.${d}`) || d;
  }
}
