
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';


import { StrathDemoUIModule } from './ui/module';
import { AppComponent }  from './app.component';

import { DashboardContainer } from './containers/dashboard/dashboard.container';


@NgModule({
  imports:      [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    HttpModule,
    NgbModalModule.forRoot(),
    StrathDemoUIModule,

    RouterModule.forRoot([
          { path: '', component: DashboardContainer, },
          { path: '**', redirectTo: '' }
      ])
  ],

  declarations: [
    AppComponent,
    DashboardContainer
  ],

  providers: [
  ],

  bootstrap:    [ AppComponent ]
})

export class AppModule { }
