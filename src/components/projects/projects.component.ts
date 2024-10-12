import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectService, Project } from '../../services/project-service';
import { environment } from '../../../environment.prod';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];
  publicUrl = environment.publicUrl;

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.projectService.getProjects().subscribe((data) => {
      this.projects = data;
    });
  }

  getImageUrl(image: string): string {
    return `${this.publicUrl}/${image}`;
  }
}
