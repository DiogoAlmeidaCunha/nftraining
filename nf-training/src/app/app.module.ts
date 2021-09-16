import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { FooterComponent } from './components/footer/footer.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NavComponent } from './components/nav/nav.component';

import AOS from 'aos';
import { ContactComponent } from './contact/contact.component';
AOS.init();

@NgModule({
  declarations: [
    AppComponent,
    ComingSoonComponent,
    FooterComponent,
    LandingPageComponent,
    NavComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
