import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroComponent } from '../components/intro/intro.component';
import { ProjectsComponent } from '../components/projects/projects.component';
import { CvComponent } from '../components/cv/cv.component';
import { ContactComponent } from '../components/contact/contact.component';
import { AboutComponent } from '../components/about/about.component';

const routes: Routes = [
  { path: '', component: IntroComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
