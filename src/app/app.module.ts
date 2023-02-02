import { environment } from './../environments/environment';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
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
import { ShoppingItemComponent } from './dashboard/shop/shopping-item/shopping-item.component';
import { ShoppingCartComponent } from './dashboard/shopping-cart/shopping-cart.component';
import { FilterProductsPipe } from './pipes/filter-products.pipe';
import { CheckoutComponent } from './dashboard/checkout/checkout.component';
import {AngularFireModule} from '@angular/fire/compat';
import { ForgotPasswordComponent } from './dashboard/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './dashboard/verify-email/verify-email.component';

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
      {path:'contact-us',component:ContactUsComponent},
      {path:'cart',component:ShoppingCartComponent}
    ], 
  },
  {path:'dashboard/home/sign-up',component:SignUpComponent},
  {path:'dashboard/home/sign-in',component:SignInComponent},
  {path:'dashboard/shop/shopping-item',component:ShoppingItemComponent},
  {path:'dashboard/shop/cart/checkout',component:CheckoutComponent},
  {path:'dashboard/verify-email',component:VerifyEmailComponent},
  {path:'dashboard/forgot-password',component:ForgotPasswordComponent}

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
    ShoppingItemComponent,
    ShoppingCartComponent,
    FilterProductsPipe,
    CheckoutComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/'} 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
