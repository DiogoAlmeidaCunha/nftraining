import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComingSoonComponent } from './coming-soon/coming-soon.component'
import { LandingPageComponent } from './landing-page/landing-page.component'
import { ContactComponent } from './contact/contact.component'

const routes: Routes = [
  { path: '' , component: ComingSoonComponent},
  { path: 'page' , component: LandingPageComponent},
  { path: 'contact' , component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
