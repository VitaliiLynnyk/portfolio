import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ParticleDirective } from './directives/particle.directive';
import { PortalPageModule } from './containers/portal/portal-page.module';

@NgModule({
  declarations: [
    AppComponent,
    ParticleDirective
  ],
  imports: [
    BrowserModule,
    PortalPageModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
