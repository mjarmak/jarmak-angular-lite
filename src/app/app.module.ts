import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LandingComponent} from "./components/landing/landing.component";
import {LandingFrComponent} from "./components/landing-fr/landing-fr.component";
import {LandingNlComponent} from "./components/landing-nl/landing-nl.component";
import {LinkListComponent} from "./components/link-list/link-list.component";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
      LandingComponent,
      LandingFrComponent,
      LandingNlComponent,
      LinkListComponent
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
