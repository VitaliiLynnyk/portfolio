import { ProjectsPageModule } from './containers/projectsPage/projects-page.module';
import { HomePageComponent } from './containers/homePage/home-page.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ParticleDirective } from './directives/particle.directive';

import { AppComponent } from './app.component';
import { PortalPageModule } from './containers/portal/portal-page.module';

@NgModule({
  declarations: [
    AppComponent,
    ParticleDirective
  ],
  imports: [
    BrowserModule,
    PortalPageModule,
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
