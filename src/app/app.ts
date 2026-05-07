import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
    <main>
      <div class="mx-auto max-w-6xl p-4">
        <router-outlet />
      </div>
    </main>
  `,
  host: {
    class: 'flex min-h-dvh flex-col',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {}
