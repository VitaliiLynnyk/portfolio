import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ParticleDirective } from './particle.directive';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [ AppComponent, ParticleDirective ],
  imports: [ BrowserModule ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
