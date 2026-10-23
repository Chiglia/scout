import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslocoDirective } from '@jsverse/transloco';
import { ClanDataService } from '../../services/clan-data.service';
import { LanguageService } from '../../services/language-service';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, RouterLink, TranslocoDirective],
  templateUrl: './settings.html'
})
export class Settings {
  readonly clanData = inject(ClanDataService);
  private readonly languageService = inject(LanguageService);

  readonly bufferOptions = [
    { minutes: 0, label: 'buffer.none' },
    { minutes: 15, label: 'buffer.m15' },
    { minutes: 30, label: 'buffer.m30' },
    { minutes: 45, label: 'buffer.m45' }
  ] as const;

  setLanguage(language: string) {
    this.languageService.setLanguage(language);
  }

  get currentLang(): string {
    return this.languageService.currentLang;
  }
}
