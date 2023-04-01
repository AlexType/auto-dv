import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from 'src/app/guards/auth-guard.service';
import { AdminLayoutComponent } from '../domain/components/admin-layout/admin-layout.component';
import { AdminAuthPageComponent } from './components/admin-auth-page/admin-auth-page.component';
import { AdminCarCreatorPageComponent } from './components/admin-car-creator-page/admin-car-creator-page.component';
import { AdminCarsPageComponent } from './components/admin-cars-page/admin-cars-page.component';
import { AdminDashboardPageComponent } from './components/admin-dashboard-page/admin-dashboard-page.component';

const routes: Routes = [
  { path: 'auth', component: AdminAuthPageComponent },
  {
    path: '', canActivate: [AuthGuardService], component: AdminLayoutComponent, children: [
      { path: 'dashboard', component: AdminDashboardPageComponent },
      { path: 'car-creator', component: AdminCarCreatorPageComponent },
      { path: 'cars', component: AdminCarsPageComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminPagesRoutingModule { }
