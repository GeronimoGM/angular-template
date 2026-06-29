import { Component, input } from '@angular/core';
import { classes } from '@spartan-ng/helm/utils';

@Component({
  selector: '[app-container]',
  imports: [],
  template: `<ng-content />`,
  host: {
    class: 'container max-w-7xl',
  },
})
export class Container {
  readonly class = input('');

  constructor() {
    classes(() => [this.class()]);
  }
}
