import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('../../components/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'projects',
    loadChildren: () => import('../../components/projects/projects.module').then(m => m.ProjectsModule)
  },
  {
    path: 'contacts',
    loadChildren: () => import('../../components/contacts/contacts.module').then(m => m.ContactsModule)
  }
];

@NgModule({
  imports: [ RouterModule.forChild(appRoutes) ],
  exports: [ RouterModule ]
})
export class PortalRoutingModule {}
