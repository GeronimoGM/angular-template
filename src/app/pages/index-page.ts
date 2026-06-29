import { ThemeService } from '@/shared/services/theme-service';
import { Component, inject } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { tablerMoon, tablerSun } from '@ng-icons/tabler-icons';
import { HlmButtonImports } from '@spartan-ng/helm/button';

@Component({
  selector: 'app-index-page',
  imports: [HlmButtonImports, NgIcon],
  template: `
    <div class="flex min-h-svh p-6">
      <div class="flex max-w-md min-w-0 flex-col gap-4 text-sm leading-loose">
        <div>
          <h1 class="font-heading text-2xl">Project ready!</h1>
          <p>You may now add components and start building.</p>
          <p>We&apos;ve already added the button component for you.</p>
          <button hlmBtn data-icon="inline-start" class="mt-2" (click)="changeTheme()">
            @if (isDark()) {
              <ng-icon name="tablerMoon" />
            } @else {
              <ng-icon name="tablerSun" />
            }
            Change theme
          </button>
        </div>
      </div>
    </div>
  `,
  viewProviders: [provideIcons({ tablerMoon, tablerSun })],
})
export class IndexPage {
  private readonly themeService = inject(ThemeService);

  protected readonly isDark = this.themeService.isDark;

  protected changeTheme() {
    this.themeService.toggleTheme();
  }
}
