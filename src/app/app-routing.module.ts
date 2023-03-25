import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      { path: '', loadChildren: () => import('./user/pages/user-pages.module').then(m => m.UserPagesModule) },
    ]
  },
  { path: 'admin', loadChildren: () => import('./admin/pages/admin-pages.module').then(m => m.AdminPagesModule) },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor() { }
}
