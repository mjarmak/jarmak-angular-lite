import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LandingComponent} from "./components/landing/landing.component";
import {LandingFrComponent} from "./components/landing-fr/landing-fr.component";
import {LandingNlComponent} from "./components/landing-nl/landing-nl.component";

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'fr', component: LandingFrComponent },
  { path: 'nl', component: LandingNlComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
