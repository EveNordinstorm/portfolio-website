import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IntroComponent } from '../components/intro/intro.component';
import { ProjectsComponent } from '../components/projects/projects.component';
import { CvComponent } from '../components/cv/cv.component';
import { ContactComponent } from '../components/contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, IntroComponent, ProjectsComponent, CvComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio-website';
}
