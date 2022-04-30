import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { APIService, Transaction} from './../API.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { AgGridAngular } from 'ag-grid-angular';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {


  columnDefs =[
    { headerName: "ID", field: "id"},
    { headerName: "Time", field: "time"},
    { headerName: "AccountID", field: "transactionAccountId"},
    { headerName: "Amount", field: "amount"},
    { headerName: "Prediction", field: "pred"},
    { headerName: "V1", field: "v1"},
    { headerName: "V2", field: "v2"},
    { headerName: "V3", field: "v3"},
    { headerName: "V4", field: "v4"},
    { headerName: "V5", field: "v5"},
    { headerName: "V6", field: "v6"},
    { headerName: "V7", field: "v7"},
    { headerName: "V8", field: "v8"},
    { headerName: "V9", field: "v9"},
    { headerName: "V10", field: "v10"},
    { headerName: "V11", field: "v11"},
    { headerName: "V12", field: "v12"},
    { headerName: "V13", field: "v13"},
    { headerName: "V14", field: "v14"},
    { headerName: "V15", field: "v15"},
    { headerName: "V16", field: "v16"},
    { headerName: "V17", field: "v17"},
    { headerName: "V18", field: "v18"},
    { headerName: "V19", field: "v19"},
    { headerName: "V20", field: "v20"},
    { headerName: "V21", field: "v21"},
    { headerName: "V22", field: "v22"},
    { headerName: "V23", field: "v23"},
    { headerName: "V24", field: "v24"},
    { headerName: "V25", field: "v25"},
    { headerName: "V26", field: "v26"},
    { headerName: "V27", field: "v27"},
    { headerName: "V28", field: "v28"},
    { headerName: "Probability", field: "prob"}
  ];

  /* declare restaurants variable */
  public transactions: Array<Transaction> = [];

  constructor(private api: APIService, private fb: FormBuilder, private router: Router,) {
  }

  private subscription: Subscription | null = null;

  ngOnInit() {
    this.api.ListTransactions().then(event =>  {
      this.transactions = (event.items as Array<Transaction>);
      
    }).catch((error) => {
      console.log(error);
    });
  }

     /**
   * Check if the router url contains the specified route
   *
   * @param {string} route
   * @returns
   * @memberof MyComponent
   */
      hasRoute(route: string) {
        return this.router.url.includes(route);
      }
  
      onRowClicked(event: any) { console.log('row', event); }
  
  }
