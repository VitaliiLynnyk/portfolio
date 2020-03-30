import { Component } from '@angular/core';

import { fadeAnimation } from '../../animations';

@Component({
  selector: 'app-portal-page',
  templateUrl: './portal-page.html',
  styleUrls: [ './portal-page.scss' ],
  animations: [ fadeAnimation ]
})
export class PortalPageComponent {}
