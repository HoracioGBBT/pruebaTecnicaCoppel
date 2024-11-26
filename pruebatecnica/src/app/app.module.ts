import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';




import { LayoutsModule } from './ui/layouts/layouts.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CoreProvidersModule } from './modules/core/infrastructure/modules/core-providers.module';

import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [

  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutsModule,
    CoreProvidersModule,
    BrowserAnimationsModule,
    AppComponent
  ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
