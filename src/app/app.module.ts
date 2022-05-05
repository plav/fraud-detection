import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';
import { Amplify } from 'aws-amplify';

/* new form imports */
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AccountsComponent } from './accounts/accounts.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { RouterModule } from '@angular/router';
import { AgGridModule } from 'ag-grid-angular';
import { NavComponent } from './nav/nav.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { PriceComponent } from './price/price.component';

import awsconfig from '../aws-exports';

Amplify.configure(awsconfig);
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
  }
];

@NgModule({
  declarations: [AppComponent, HomeComponent, AccountsComponent, TransactionsComponent, NavComponent, PriceComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    AmplifyAuthenticatorModule,
    MDBBootstrapModule.forRoot(),
    AgGridModule.withComponents([]),

    /* configuring form modules */
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}