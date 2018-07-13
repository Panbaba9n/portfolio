import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { HomePageComponent } from "./home-page/home-page.component";
import { AboutPageComponent } from "./about-page/about-page.component";
import { AboutMeComponent } from "./about-page/about-me/about-me.component";
import { ProfileComponent } from "./about-page/profile/profile.component";
import { SkillsComponent } from './skills/skills.component';

const routes: Routes = [
  { path: 'home',  component: HomePageComponent },
  { path: 'about',
    component: AboutPageComponent,
    children: [
      { path: '', redirectTo: 'about-me', pathMatch: 'full' },
      { path: 'about-me', component: AboutMeComponent },
      { path: 'profile', component: ProfileComponent }
    ]},
  { path: 'skills', component: SkillsComponent },
  { path: '**',  redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
