import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { E404Component } from './pages/e404/e404.component';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataBase } from './shared/in-memory-database';

@NgModule({
  declarations: [
    AppComponent
    , E404Component
    , HomeComponent
  ],
  imports: [
    BrowserModule
    , AppRoutingModule
    , HttpClientModule
    , HttpClientInMemoryWebApiModule.forRoot(InMemoryDataBase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
