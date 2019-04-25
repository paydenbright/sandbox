import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TabsComponent } from './shared/components/tabs/tabs.component';
import { TabsSelectedContentComponent } from './shared/components/tabs/tabs-selected-content/tabs-selected-content.component';
import { ActionBarComponent } from './shared/components/action-bar/action-bar.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, TabsComponent, TabsSelectedContentComponent, ActionBarComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
