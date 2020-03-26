import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.html',
  styleUrls: [ './projects.scss' ]
})
export class ProjectsComponent {
  arrOfProjects = [
    {
      imgUrl: '../assets/project-imgs/test-system.jpg',
      name: 'TestSystem',
      projectUrl: 'https://github.com/VitaliiLynnyk/web-app-practice',
      stack: [
        'Angular',
        'Node',
        'PostgreSql',
        'SCSS'
      ]
    },
    {
      imgUrl: '../assets/project-imgs/google-fonts.jpg',
      name: 'Favorite Fonts',
      projectUrl: 'https://github.com/VitaliiLynnyk/soloproject-tier2-favfonts',
      stack: [
        'Angular',
        'HTML',
        'SCSS'
      ]
    }
  ];
}
