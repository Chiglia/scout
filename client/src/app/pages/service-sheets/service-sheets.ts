import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TranslocoDirective, TranslocoService } from '@jsverse/transloco';
import { AutoCompleteCompleteEvent, AutoCompleteModule } from 'primeng/autocomplete';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { ClanDataService } from '../../services/clan-data.service';
import { DAYS_METADATA } from '../../services/time-utils';

interface SheetDraft {
    roverName: string;
    serviceName: string;
    location: string;
    schedule: string;
    contactPerson: string;
    contactPhone: string;
}

interface ServiceSheet extends SheetDraft {
    id: string;
    scheduleLines: string[];
}

@Component({
    selector: 'app-service-sheets',
    imports: [FormsModule, RouterLink, TranslocoDirective, AutoCompleteModule, InputTextModule, TextareaModule],
    templateUrl: './service-sheets.html',
    styleUrl: './service-sheets.css'
})
export class ServiceSheets {
    private clanData = inject(ClanDataService);
    private transloco = inject(TranslocoService);

    readonly members = this.clanData.members;
    readonly services = this.clanData.services;
    readonly memberSuggestions = signal<string[]>([]);
    readonly serviceSuggestions = signal<string[]>([]);
    readonly cards = signal<ServiceSheet[]>([]);
    readonly editingId = signal<string | null>(null);
    draft = this.emptyDraft();

    readonly sheets = computed(() => {
        const entries = this.cards();
        return Array.from({ length: Math.ceil(entries.length / 2) }, (_, index) => entries.slice(index * 2, index * 2 + 2));
    });

    private emptyDraft(): SheetDraft {
        return { roverName: '', serviceName: '', location: '', schedule: '', contactPerson: '', contactPhone: '' };
    }

    filterSuggestions(event: AutoCompleteCompleteEvent, source: 'members' | 'services') {
        const query = event.query.toLocaleLowerCase();
        const names = source === 'members'
            ? this.members().map(member => `${member.name} ${member.surname}`)
            : this.services().map(service => service.name);
        const suggestions = [...new Set(names)].filter(name => name.toLocaleLowerCase().includes(query));
        if (source === 'members') this.memberSuggestions.set(suggestions);
        else this.serviceSuggestions.set(suggestions);
    }

    chooseService(name: string | null) {
        this.draft.serviceName = name ?? '';
        const service = this.services().find(entry => entry.name === name);
        if (!service) return;
        this.draft.location = service.location ?? '';
        const slots = [...service.scheduleSlots].sort((first, second) =>
            DAYS_METADATA.findIndex(day => day.id === first.day) - DAYS_METADATA.findIndex(day => day.id === second.day)
            || first.startTime.localeCompare(second.startTime)
        );
        this.draft.schedule = slots.map(slot => {
            const day = DAYS_METADATA.find(entry => entry.id === slot.day);
            const label = this.transloco.getActiveLang() === 'en' ? day?.labelEn : day?.labelIt;
            return `${label ?? slot.day} ${slot.startTime} - ${slot.endTime}`;
        }).join('\n');
        this.draft.contactPerson = service.contactPerson ?? '';
        this.draft.contactPhone = service.contactPhone ?? '';
    }

    saveCard(form: NgForm) {
        const values = {
            roverName: this.draft.roverName.trim(),
            serviceName: this.draft.serviceName.trim(),
            location: this.draft.location.trim(),
            schedule: this.draft.schedule.trim(),
            contactPerson: this.draft.contactPerson.trim(),
            contactPhone: this.draft.contactPhone.trim()
        };
        if (!values.roverName || !values.serviceName) return;
        const id = this.editingId();
        const card: ServiceSheet = {
            ...values,
            id: id ?? crypto.randomUUID(),
            scheduleLines: values.schedule.split('\n').map(line => line.trim()).filter(Boolean)
        };
        this.cards.update(cards => id ? cards.map(entry => entry.id === id ? card : entry) : [...cards, card]);
        this.resetDraft();
        form.resetForm({ rover: '', service: '', location: '', schedule: '', contact: '', phone: '' });
    }

    editCard(card: ServiceSheet) {
        this.editingId.set(card.id);
        this.draft = {
            roverName: card.roverName, serviceName: card.serviceName, location: card.location, schedule: card.schedule,
            contactPerson: card.contactPerson, contactPhone: card.contactPhone
        };
        document.getElementById('sheet-rover')?.focus();
    }

    removeCard(id: string) {
        this.cards.update(cards => cards.filter(card => card.id !== id));
        if (this.editingId() === id) this.resetDraft();
    }

    resetDraft() {
        this.editingId.set(null);
        this.draft = this.emptyDraft();
    }

    print() {
        if (this.cards().length) window.print();
    }
}