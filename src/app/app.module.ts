import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    PortalPageModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
