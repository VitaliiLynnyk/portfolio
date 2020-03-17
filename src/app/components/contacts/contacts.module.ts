import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ContactsComponent } from './contacts.component';
import { ContactsRoutingModule } from './contacts-routing.module';

@NgModule({
  declarations: [ ContactsComponent ],
  imports: [
    FormsModule,
    CommonModule,
    ContactsRoutingModule
  ]
})
export class ContactsModule {}
