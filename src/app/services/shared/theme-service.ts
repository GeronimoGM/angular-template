import { PlatformService } from '@/services/shared/platform-service';
import {
  Injectable,
  type Renderer2,
  RendererFactory2,
  computed,
  inject,
  signal,
} from '@angular/core';

export type Theme = 'light' | 'dark';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  constructor() {
    this.initTheme();
  }

  private readonly renderer: Renderer2 = inject(RendererFactory2).createRenderer(null, null);
  private readonly platformService = inject(PlatformService);
  private readonly storageKey = 'theme';
  private readonly _theme = signal<Theme>('light');

  readonly theme = this._theme.asReadonly();
  readonly isDark = computed(() => this._theme() === 'dark');

  toggleTheme(): void {
    this.setTheme(this.isDark() ? 'light' : 'dark');
  }

  private initTheme(): void {
    if (this.platformService.isServer()) {
      return;
    }

    const savedTheme = localStorage.getItem(this.storageKey) as Theme | null;

    if (savedTheme) {
      this._theme.set(savedTheme);
      return;
    }

    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    this._theme.set(prefersDark ? 'dark' : 'light');
  }

  private setTheme(theme: Theme): void {
    this._theme.set(theme);

    if (this.platformService.isServer()) {
      return;
    }

    localStorage.setItem(this.storageKey, theme);

    if (theme === 'dark') {
      this.renderer.addClass(document.documentElement, 'dark');
      return;
    }

    this.renderer.removeClass(document.documentElement, 'dark');
  }
}
