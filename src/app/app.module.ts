import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { E404Component } from './pages/e404/e404.component';
import { HomeComponent } from './pages/home/home.component';
import { CategoryService } from './pages/categories/services/category.service';

@NgModule({
  declarations: [
    AppComponent
    , E404Component
    , HomeComponent
  ],
  imports: [
    BrowserModule
    , AppRoutingModule
  ],
  providers: [
    CategoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
