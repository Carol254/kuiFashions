import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './dashboard/home/home.component';
import { ShopComponent } from './dashboard/shop/shop.component';
import { AboutUsComponent } from './dashboard/about-us/about-us.component';
import { InsightsComponent } from './dashboard/insights/insights.component';
import { ContactUsComponent } from './dashboard/contact-us/contact-us.component';
import { HeaderComponent } from './dashboard/header/header.component';
import { SignUpComponent } from './dashboard/sign-up/sign-up.component';
import { SignInComponent } from './dashboard/sign-in/sign-in.component';
import { ShoppingItemComponent } from './dashboard/shopping-item/shopping-item.component';

const appRoutes:Routes =[
  {path:'',redirectTo:'dashboard',pathMatch:'full'},
  {
    path:'dashboard',
    children:[
      {path:'',redirectTo:'home',pathMatch:'full'},
      {path:'home',component:HomeComponent},
      {path:'shop',component:ShopComponent},
      {path:'about-us',component:AboutUsComponent},
      {path:'insights',component:InsightsComponent},
      {path:'contact-us',component:ContactUsComponent}
    ], 
  },
  {path:'dashboard/home/sign-up',component:SignUpComponent},
  {path:'dashboard/home/sign-in',component:SignInComponent},
  {path:'dashboard/shop/shopping-item',component:ShoppingItemComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent,
    ShopComponent,
    AboutUsComponent,
    InsightsComponent,
    ContactUsComponent,
    HeaderComponent,
    SignUpComponent,
    SignInComponent,
    ShoppingItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/'} 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
