import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { TypingAnimationModule } from 'angular-typing-animation'

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { NavigationComponent } from './navigation/navigation.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { AboutMeComponent } from './about-page/about-me/about-me.component';
import { ProfileComponent } from './about-page/profile/profile.component';
import { SkillsComponent } from './skills/skills.component';
import { TechnologyService } from "../shared/components/services/technology.service";
import { LinksService } from "../shared/components/services/links.service";


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomePageComponent,
    AboutPageComponent,
    AboutMeComponent,
    ProfileComponent,
    SkillsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    TypingAnimationModule
  ],
  providers: [
    TechnologyService,
    LinksService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
