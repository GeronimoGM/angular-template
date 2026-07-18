import { PlatformService } from '@/shared/services/platform-service';
import { DOCUMENT } from '@angular/common';
import {
  computed,
  inject,
  RendererFactory2,
  Service,
  signal
} from '@angular/core';

export type Theme = 'light' | 'dark';

const THEME_KEY = 'theme' as const;

@Service()
export class ThemeService {
  constructor() {
    this._initTheme();
  }

  private readonly _renderer = inject(RendererFactory2).createRenderer(null, null);
  private readonly _platform = inject(PlatformService);
  private readonly _document = inject(DOCUMENT);

  private readonly _theme = signal<Theme>('light');

  readonly theme = this._theme.asReadonly();
  readonly isDark = computed(() => this._theme() === 'dark');

  toggleTheme(): void {
    this._setTheme(this.isDark() ? 'light' : 'dark');
  }

  private _initTheme(): void {
    if (this._platform.isServer()) {
      return;
    }

    const savedTheme = localStorage.getItem(THEME_KEY) as Theme | null;

    if (savedTheme) {
      this._theme.set(savedTheme);
      this._applyTheme(savedTheme);
      return;
    }

    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme: Theme = prefersDark ? 'dark' : 'light';

    this._theme.set(theme);
    this._applyTheme(theme);
  }

  private _setTheme(theme: Theme): void {
    this._theme.set(theme);

    if (this._platform.isServer()) {
      return;
    }

    localStorage.setItem(THEME_KEY, theme);

    this._disableTransitions(() => {
      this._applyTheme(theme);
    });
  }

  private _applyTheme(theme: Theme): void {
    if (theme === 'dark') {
      this._renderer.addClass(this._document.documentElement, 'dark');
      return;
    }

    this._renderer.removeClass(this._document.documentElement, 'dark');
  }

  private _disableTransitions(callback: () => void): void {
    const style = this._renderer.createElement('style') as HTMLStyleElement;

    style.textContent = `
      *,
      *::before,
      *::after {
        transition: none !important;
        animation: none !important;
      }
    `;

    this._renderer.appendChild(this._document.head, style);

    callback();

    void this._document.documentElement.offsetHeight;

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        this._renderer.removeChild(this._document.head, style);
      });
    });
  }
}