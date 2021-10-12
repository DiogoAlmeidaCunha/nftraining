import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComingSoonComponent } from './coming-soon/coming-soon.component'
import { LandingPageComponent } from './landing-page/landing-page.component'
import { ContactComponent } from './contact/contact.component'
import { StartNowComponent } from './start-now/start-now.component'
import { OnlinePageComponent } from './online-page/online-page.component'
import { PersonalPageComponent } from './personal-page/personal-page.component'

const routes: Routes = [
  { path: '' , component: ComingSoonComponent},
  { path: 'page' , component: LandingPageComponent},
  { path: 'contact' , component: ContactComponent},
  { path: 'pacotes' , component: StartNowComponent},
  { path: 'onlineCoach', component: OnlinePageComponent},
  { path: 'personalCoach', component: PersonalPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
