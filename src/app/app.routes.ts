import { Routes } from '@angular/router';
import { IntroComponent } from '../components/intro/intro.component';
import { CvComponent } from '../components/cv/cv.component';
import { ProjectsComponent } from '../components/projects/projects.component';
import { ContactComponent } from '../components/contact/contact.component';
import { AboutComponent } from '../components/about/about.component';

export const routes: Routes = [
  { path: '', component: IntroComponent },
  { path: 'cv', component: CvComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
];
