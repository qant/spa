import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './about/about.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroesService } from './services/heroes.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [HeroesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
