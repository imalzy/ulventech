import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core/core.module';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CounterTextComponent } from './counter-text/counter-text.component';
import { WhitespacePipe } from './pipe/whitespace.pipe';


@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    CounterTextComponent,
    WhitespacePipe
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    CoreModule
  ]
})
export class PagesModule { }
