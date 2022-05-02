import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { APIService, Account} from './../API.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { AgGridAngular } from 'ag-grid-angular';
import * as myGlobals from '../globals'; //<==== this one (**Updated**)
import { ValueCache } from 'ag-grid-community';


@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {
  validatingForm!: FormGroup;
  
  columnDefs =[
    { headerName: "ID", field: "id", filter: true, sortable: true},
    { headerName: "First name", field: "fname", filter: true, sortable: true},
    { headerName: "Second name", field: "sname", filter: true, sortable: true},
    { headerName: "Email", field: "email", filter: true, sortable: true},
    { headerName: "Phone", field: "phone", filter: true, sortable: true},
    { headerName: "Bank City", field: "bcity", filter: true, sortable: true},
    { headerName: "Bank Name", field: "bname", filter: true, sortable: true}
  ];
    
  public createForm: FormGroup;

  /* declare restaurants variable */
  public accounts: Array<Account> = [];

  constructor(private api: APIService, private fb: FormBuilder, private router: Router,) {
    this.createForm = this.fb.group({
      fname: ['', Validators.required],
      sname: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      bname: ['', Validators.required],
      bcity: ['', Validators.required],
      transactions: ['', Validators.required],
    });
    this.validatingForm = new FormGroup({
      loginFormModalEmail: new FormControl('', Validators.email),
      loginFormModalPassword: new FormControl('', Validators.required)
    });
  }

  private subscription: Subscription | null = null;

  public helloString: string="hello " + myGlobals.sep + " there";
  str!: string; 
  
  async ngOnInit() {
    this.api.ListAccounts().then(event =>  {
      this.accounts = (event.items as Array<Account>);
    });
  
    this.subscription = <Subscription>this.api.OnCreateAccountListener.subscribe( (event: any) => {
      const newAccount = event.value.data.onCreateAccount;
      this.accounts = [newAccount, ...this.accounts];
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

    onRowClicked(event: any){
      console.log(event.data.id); 
      this.str= event.data.id.toString();
    } 
    get loginFormModalEmail() {
      return this.validatingForm.get('loginFormModalEmail');
    }
  
    get loginFormModalPassword() {
      return this.validatingForm.get('loginFormModalPassword');
    }
}
