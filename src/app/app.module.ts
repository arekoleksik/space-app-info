import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LauchesComponent } from './lauches/lauches.component';
import { AppRoutingModule } from './routing/routing.module';
import { HttpClientModule } from '@angular/common/http';
import { LaunchCardComponent } from './launch-card/launch-card.component';
import { UpcomingCardComponent } from './upcoming-card/upcoming-card.component';
import { UpcomingComponent } from './upcoming/upcoming.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LauchesComponent,
    LaunchCardComponent,
    UpcomingCardComponent,
    UpcomingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
