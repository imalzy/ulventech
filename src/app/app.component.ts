import { Component } from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';
import { routerTransition } from './app.animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routerTransition],
})
export class AppComponent {
  title = 'ulventech-test';

  getState(outlet: any) {
    return outlet.activatedRouteData.state;
  }
}
