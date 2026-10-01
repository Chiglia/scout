import { Component, inject, output, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoDirective } from '@jsverse/transloco';
import { ClanDataService } from '../../services/clan-data.service';
import { LanguageService } from '../../services/language-service';

export type ActiveTab = 'dashboard' | 'members' | 'services' | 'matrix' | 'schedule';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [CommonModule, TranslocoDirective],
  templateUrl: './top-bar.html'
})
export class TopBarComponent {
  clanData = inject(ClanDataService);
  langService = inject(LanguageService);

  activeTab = input.required<ActiveTab>();
  tabChange = output<ActiveTab>();
  openImport = output<void>();
  openWhatsApp = output<void>();
  autoAssign = output<void>();
  openReset = output<void>();

  setLanguage(lang: string) {
    this.langService.setLanguage(lang);
  }

  get currentLang(): string {
    return this.langService.currentLang;
  }
}
