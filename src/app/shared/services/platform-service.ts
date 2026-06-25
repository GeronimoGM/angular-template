import { isPlatformBrowser } from '@angular/common';
import { computed, inject, PLATFORM_ID, Service, signal } from '@angular/core';

@Service()
export class PlatformService {
  private readonly platformId = inject(PLATFORM_ID);

  private readonly _isBrowser = signal(isPlatformBrowser(this.platformId));
  readonly isBrowser = this._isBrowser.asReadonly();
  readonly isServer = computed(() => !this._isBrowser());
}
