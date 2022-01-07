import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComingSoonComponent } from './coming-soon/coming-soon.component'
import { LandingPageComponent } from './landing-page/landing-page.component'
import { ContactComponent } from './contact/contact.component'
import { StartNowComponent } from './start-now/start-now.component'
import { OnlinePageComponent } from './online-page/online-page.component'
import { PersonalPageComponent } from './personal-page/personal-page.component'
import { DoneComponent } from './done/done.component';

const routes: Routes = [
  { path: '' , component: LandingPageComponent},
  { path: 'contact' , component: ContactComponent},
  { path: 'pacotes' , component: StartNowComponent},
  { path: 'onlineCoach', component: OnlinePageComponent},
  { path: 'personalCoach', component: PersonalPageComponent},
  { path: 'personalCoach/done', component: DoneComponent},
  { path: 'onlineCoach/done', component: DoneComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
