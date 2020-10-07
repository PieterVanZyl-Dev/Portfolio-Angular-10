import { ResumePageComponent } from './resume-page/resume-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: LandingPageComponent, outlet: 'landing' },
  { path: 'landing', component: LandingPageComponent, outlet: 'landing' },
  { path: 'about', component: ResumePageComponent },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
