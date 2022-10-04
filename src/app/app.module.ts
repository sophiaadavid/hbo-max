import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavBarComponent } from './navigation/top-nav-bar/top-nav-bar.component';
import { SecNavBarComponent } from './navigation/sec-nav-bar/sec-nav-bar.component';
import { FooterComponent } from './navigation/footer/footer.component';
import { TopCarouselComponent } from './carousel/top-carousel.component';
import { MainBandComponent } from './band/main-band.component';
import { BottomAccordianComponent } from './accordian/bottom-accordian.component';
import {OscarBandComponent} from "./band/oscar-band.component"
import { SignInLayoutComponent } from './layout/signin-layout.component';
import { HomeLayoutComponent } from './routing/home-layout.component';
import { SignUpLayoutComponent } from './routing/sign-up-layout.component';
import { ViewPlansLayoutComponent } from './routing/view-plans-layout.component';
import { SeeDetailsLayoutComponent } from './routing/see-details-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    SecNavBarComponent,
    FooterComponent,
    MainBandComponent,
    TopCarouselComponent,
    BottomAccordianComponent,
    OscarBandComponent,
    SignInLayoutComponent,
    HomeLayoutComponent,
    SignUpLayoutComponent,
    ViewPlansLayoutComponent,
    SeeDetailsLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
