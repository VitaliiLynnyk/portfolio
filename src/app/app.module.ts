import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PortalPageModule } from './containers/portal/portal-page.module';
import { ParticleDirective } from './directives/particle.directive';

@NgModule({
  declarations: [
    AppComponent,
    ParticleDirective
  ],
  imports: [
    BrowserModule,
    PortalPageModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
