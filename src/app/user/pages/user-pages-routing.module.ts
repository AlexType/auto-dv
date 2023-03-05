import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserCalculationPageComponent } from './components/user-calculation-page/user-calculation-page.component';
import { UserContactsPageComponent } from './components/user-contacts-page/user-contacts-page.component';
import { UserFaqPageComponent } from './components/user-faq-page/user-faq-page.component';
import { UserMainPageComponent } from './components/user-main-page/user-main-page.component';
import { UserServicesPageComponent } from './components/user-services-page/user-services-page.component';

const routes: Routes = [
  { path: '', component: UserMainPageComponent },
  { path: 'faq', component: UserFaqPageComponent },
  { path: 'services', component: UserServicesPageComponent },
  { path: 'contacts', component: UserContactsPageComponent },
  { path: 'calculation', component: UserCalculationPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserPagesRoutingModule { }
