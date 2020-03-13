import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeModule } from '../../components/home/home.module';
import { HeaderModule } from '../../components/header/header.module';
import { FooterModule } from '../../components/footer/footer.module';
import { ContactsModule } from '../../components/contacts/contacts.module';
import { ProjectsModule } from '../../components/projects/projects.module';

import { PortalRoutingModule } from './portal-page-routing.module';
import { PortalPageComponent } from './portal-page.component';

@NgModule({
  declarations: [
    PortalPageComponent
  ],
  exports: [
    PortalPageComponent
  ],
  imports: [
    HomeModule,
    CommonModule,
    FooterModule,
    HeaderModule,
    ContactsModule,
    ProjectsModule,
    PortalRoutingModule
  ]
})
export class PortalPageModule {}
