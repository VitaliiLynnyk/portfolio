import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ParticleDirective } from './directives/particle.directive';

import { AppComponent } from './app.component';

import { HomeModule } from './containers/home/home.module';
import { FooterModule } from './containers/footer/footer.module';
import { HeaderModule } from './containers/header/header.module';

@NgModule({
  declarations: [
    AppComponent,
    ParticleDirective
  ],
  imports: [
    HomeModule,
    HeaderModule,
    FooterModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
