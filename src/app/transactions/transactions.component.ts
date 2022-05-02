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
    { headerName: "ID", field: "id", filter: true, sortable: true},
    { headerName: "Time", field: "time", filter: true, sortable: true},
    { headerName: "AccountID", field: "transactionAccountId", filter: true, sortable: true},
    { headerName: "Amount", field: "amount", filter: true, sortable: true},
    { headerName: "Prediction", field: "pred", filter: true, sortable: true},
    { headerName: "V1", field: "v1", filter: true, sortable: true},
    { headerName: "V2", field: "v2", filter: true, sortable: true},
    { headerName: "V3", field: "v3", filter: true, sortable: true},
    { headerName: "V4", field: "v4", filter: true, sortable: true},
    { headerName: "V5", field: "v5", filter: true, sortable: true},
    { headerName: "V6", field: "v6", filter: true, sortable: true},
    { headerName: "V7", field: "v7", filter: true, sortable: true},
    { headerName: "V8", field: "v8", filter: true, sortable: true},
    { headerName: "V9", field: "v9", filter: true, sortable: true},
    { headerName: "V10", field: "v10", filter: true, sortable: true},
    { headerName: "V11", field: "v11", filter: true, sortable: true},
    { headerName: "V12", field: "v12", filter: true, sortable: true},
    { headerName: "V13", field: "v13", filter: true, sortable: true},
    { headerName: "V14", field: "v14", filter: true, sortable: true},
    { headerName: "V15", field: "v15", filter: true, sortable: true},
    { headerName: "V16", field: "v16", filter: true, sortable: true},
    { headerName: "V17", field: "v17", filter: true, sortable: true},
    { headerName: "V18", field: "v18", filter: true, sortable: true},
    { headerName: "V19", field: "v19", filter: true, sortable: true},
    { headerName: "V20", field: "v20", filter: true, sortable: true},
    { headerName: "V21", field: "v21", filter: true, sortable: true},
    { headerName: "V22", field: "v22", filter: true, sortable: true},
    { headerName: "V23", field: "v23", filter: true, sortable: true},
    { headerName: "V24", field: "v24", filter: true, sortable: true},
    { headerName: "V25", field: "v25", filter: true, sortable: true},
    { headerName: "V26", field: "v26", filter: true, sortable: true},
    { headerName: "V27", field: "v27", filter: true, sortable: true},
    { headerName: "V28", field: "v28", filter: true, sortable: true},
    { headerName: "Probability", field: "prob", filter: true, sortable: true}
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
