import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.html',
  styleUrls: [ './projects.scss' ]
})
export class ProjectsComponent {
  arrOfProjects = [
    {
      imgUrl: 'https://user-images.githubusercontent.com/22242511/73015382-3193d600-3e1c-11ea-84db-c997627864ff.png',
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
      imgUrl: 'https://user-images.githubusercontent.com/22242511/76707580-9b2fb280-66f0-11ea-830f-20c37881a38c.png',
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
