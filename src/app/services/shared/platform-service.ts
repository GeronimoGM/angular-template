import { isPlatformBrowser } from '@angular/common';
import { computed, inject, Injectable, PLATFORM_ID, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PlatformService {
  private readonly platformId = inject(PLATFORM_ID);

  readonly _isBrowser = signal(isPlatformBrowser(this.platformId));
  readonly isBrowser = this._isBrowser.asReadonly();
  readonly isServer = computed(() => !this._isBrowser());
}
