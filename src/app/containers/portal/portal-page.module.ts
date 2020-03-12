import { ContactsModule } from './../../components/contacts/contacts.module';
import { ProjectsModule } from './../../components/projects/projects.module';
import { NgModule } from '@angular/core';
import { PortalPageComponent } from './portal-page.component';
import { HomeModule } from 'src/app/components/home/home.module';
import { HeaderModule } from 'src/app/components/header/header.module';
import { FooterModule } from 'src/app/components/footer/footer.module';
import { CommonModule } from '@angular/common';
import { PortalRoutingModule } from './portal-page-routing.module';

@NgModule({
  declarations: [
    PortalPageComponent
  ],
  exports: [
    PortalPageComponent
  ],
  imports: [
    ContactsModule,
    PortalRoutingModule,
    ProjectsModule,
    HomeModule,
    HeaderModule,
    FooterModule,
    CommonModule
  ]
})
export class PortalPageModule { }
