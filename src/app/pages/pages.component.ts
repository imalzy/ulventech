import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../app.animation';

@Component({
  selector: 'app-pages',
  template: `
    <div [@routerTransition]="getState(o)">
      <router-outlet #o="outlet"></router-outlet>
    </div>
  `,
  animations: [routerTransition],
})
export class PagesComponent {
  getState(outlet: any) {
    return outlet.activatedRouteData.state;
  }
}
