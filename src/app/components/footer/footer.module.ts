import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './footer.component';

@NgModule({
  declarations: [ FooterComponent ],
  exports: [ FooterComponent ],
  imports: [
    RouterModule,
    CommonModule
  ]
})
export class FooterModule { }
