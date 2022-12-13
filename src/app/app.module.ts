import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './dashboard/home/home.component';
import { ShopComponent } from './dashboard/shop/shop.component';
import { AboutUsComponent } from './dashboard/about-us/about-us.component';
import { InsightsComponent } from './dashboard/insights/insights.component';
import { ContactUsComponent } from './dashboard/contact-us/contact-us.component';
import { HeaderComponent } from './dashboard/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent,
    ShopComponent,
    AboutUsComponent,
    InsightsComponent,
    ContactUsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
