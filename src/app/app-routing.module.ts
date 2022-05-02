import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { AccountsComponent } from './accounts/accounts.component';
import { HomeComponent } from './home/home.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: "", redirectTo: "", pathMatch: 'full'
  },
  {
    path: 'accounts',
    component: AccountsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'transactions',
    component: TransactionsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'account',
    component: AccountComponent,
  },
  {
    path: "**", redirectTo: ""
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
