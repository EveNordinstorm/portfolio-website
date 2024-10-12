import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterModule, Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { IntroComponent } from '../components/intro/intro.component';
import { ProjectsComponent } from '../components/projects/projects.component';
import { CvComponent } from '../components/cv/cv.component';
import { ContactComponent } from '../components/contact/contact.component';
import { AboutComponent } from '../components/about/about.component';
import { ScrollToTopComponent } from '../components/scroll-to-top/scroll-to-top.component';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterModule,
    IntroComponent,
    CvComponent,
    ProjectsComponent,
    ContactComponent,
    AboutComponent,
    ScrollToTopComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('navItemCombined', [
      state('hidden', style({
        opacity: 0,
        transform: 'translateY(-20px) scale(1)'
      })),
      state('visible', style({
        opacity: 1,
        transform: 'translateY(0) scale(1)'
      })),
      state('hover', style({
        transform: 'scale(1.1)',
        opacity: 1,
        color: '#2dd4bf'
      })),
      transition('hidden => visible', [
        animate('0.5s ease-out')
      ]),
      transition('visible => hover', [
        animate('0.3s ease-in-out')
      ]),
      transition('hover => visible', [
        animate('0.3s ease-in-out')
      ])
    ])
  ]
})
export class AppComponent implements OnInit {
  title = 'portfolio-website';
  navState = 'hidden';
  hoveredIndex: number = -1;

  navItems = [
    { name: 'CV', fragment: 'cv' },
    { name: 'Projects', fragment: 'projects' },
    { name: 'Contact', fragment: 'contact' },
    { name: 'About', fragment: 'about' }
  ];

  constructor(private router: Router) {}

  ngOnInit() {
    setTimeout(() => {
      this.navState = 'visible';
    }, 600);

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        const fragment = this.router.routerState.root.firstChild?.snapshot.fragment;
        if (fragment) {
          this.scrollTo(fragment);
        }
      });
  }

  private scrollTo(fragment: string) {
    const element = document.getElementById(fragment);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
