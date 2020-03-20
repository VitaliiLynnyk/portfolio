import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    loadChildren: () => import('../../components/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'projects',
    loadChildren: () => import('../../components/projects/projects.module').then(m => m.ProjectsModule)
  },
  {
    path: 'resume',
    loadChildren: () => import('../../components/resume/resume.module').then(m => m.ResumeModule)
  },
  {
    path: 'contacts',
    loadChildren: () => import('../../components/contacts/contacts.module').then(m => m.ContactsModule)
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules }) ],
  exports: [ RouterModule ]
})
export class PortalRoutingModule {}
