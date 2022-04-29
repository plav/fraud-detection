import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';

/* new form imports */
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AccountsComponent } from './accounts/accounts.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { RouterModule } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { AgGridModule } from 'ag-grid-angular';


var routes: any = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'accounts',
    component: AccountsComponent
  },
  {
    path: 'transactions',
    component: TransactionsComponent
  },
  {
    path: 'account',
    component: AccountComponent
  }
];

@NgModule({
  declarations: [AppComponent, HomeComponent, AccountsComponent, TransactionsComponent, AccountComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    AmplifyAuthenticatorModule,
    AgGridModule.withComponents([]),

    /* configuring form modules */
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}