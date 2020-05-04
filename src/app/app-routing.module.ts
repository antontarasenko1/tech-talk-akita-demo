import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountsPageComponent } from './accounts/accounts-page/accounts-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'accounts'
  },
  {
    path: 'accounts',
    component: AccountsPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
