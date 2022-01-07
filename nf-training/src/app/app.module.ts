import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { FooterComponent } from './components/footer/footer.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NavComponent } from './components/nav/nav.component';

import AOS from 'aos';
import { ContactComponent } from './contact/contact.component';
import { StartNowComponent } from './start-now/start-now.component';
import { OnlinePageComponent } from './online-page/online-page.component';
import { PersonalPageComponent } from './personal-page/personal-page.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DoneComponent } from './done/done.component';


AOS.init();

@NgModule({
  declarations: [
    AppComponent,
    ComingSoonComponent,
    FooterComponent,
    LandingPageComponent,
    NavComponent,
    ContactComponent,
    StartNowComponent,
    OnlinePageComponent,
    PersonalPageComponent,
    DoneComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NoopAnimationsModule,
    MatSelectModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
