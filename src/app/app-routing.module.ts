import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      { path: '', loadChildren: () => import('./user/pages/user-pages-routing.module').then(m => m.UserPagesRoutingModule) },
      { path: '**', redirectTo: '/' }
    ]
  },
  { path: '', loadChildren: () => import('./user/pages/user-pages.module').then(m => m.UserPagesModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor() { }
}
