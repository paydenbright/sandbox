import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';
import { TooltipDirective } from './shared/directives/tooltip/tooltip.directive';
import { LoadingBtnComponent } from './shared/components/loading-btn/loading-btn.component';


@NgModule({
  declarations: [AppComponent, HomeComponent, NavBarComponent, TooltipDirective, LoadingBtnComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
