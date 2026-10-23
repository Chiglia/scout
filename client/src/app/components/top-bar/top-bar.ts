import { Component, inject, output, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslocoDirective } from '@jsverse/transloco';
import { ClanDataService } from '../../services/clan-data.service';

export type ActiveTab = 'dashboard' | 'members' | 'services' | 'matrix' | 'schedule';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [CommonModule, RouterLink, TranslocoDirective],
  templateUrl: './top-bar.html'
})
export class TopBarComponent {
  clanData = inject(ClanDataService);

  activeTab = input.required<ActiveTab>();
  tabChange = output<ActiveTab>();
  openImport = output<void>();
  openWhatsApp = output<void>();
  autoAssign = output<void>();
  openReset = output<void>();

}
