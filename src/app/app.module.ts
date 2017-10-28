
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import 'hammerjs';


import { AppRoutes } from './app.routes'

import { ProtosMaterialModule } from './material.module';

import { AppStoreProviders } from './app.store';

import { AppComponent } from './app.component';


import {
  HeaderComponent,
  HomeComponent,
  FooterComponent,
  FxVersionComponent
} from './ui';

import {
  LoadingSpinnerComponent,
  LoadingSpinnerService,
  ConfigurationService,
  InMemoryApiService,
  PatientsService
} from './services';



export function init(config: ConfigurationService) {
  return () => {
    return config.load();
  };
}



@NgModule({
  imports: [

    BrowserModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    ProtosMaterialModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(InMemoryApiService),

    RouterModule.forRoot(AppRoutes)
  ],

  declarations: [

    AppComponent,
    LoadingSpinnerComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    FxVersionComponent
  ],

  providers: [

    AppStoreProviders,
    {
      'provide': APP_INITIALIZER,
      'useFactory': init,
      'deps': [ConfigurationService],
      'multi': true
    },
    ConfigurationService,

    LoadingSpinnerService,
    PatientsService
  ],

  entryComponents: [

    LoadingSpinnerComponent,
  ],

  bootstrap: [AppComponent]
})

export class AppModule { }
