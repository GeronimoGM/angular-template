import { Component } from '@angular/core';

@Component({
  selector: '[app-container]',
  imports: [],
  template: `<ng-content />`,
  host: {
    class: 'container mx-auto max-w-7xl p-md sm:px-lg lg:px-xl',
  },
})
export class Container {}
