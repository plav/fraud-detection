import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { APIService, Account} from './../API.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {


  columnDefs =[
    { headerName: "ID", field: "id", filter: true, sortable: true, resizable: true},
    { headerName: "First name", field: "fname", filter: true, sortable: true, resizable: true},
    { headerName: "Second name", field: "sname", filter: true, sortable: true, resizable: true},
    { headerName: "Email", field: "email", filter: true, resizable: true},
    { headerName: "Phone", field: "phone", filter: true},
    { headerName: "Bank City", field: "bcity", filter: true, sortable: true, resizable: true},
    { headerName: "Bank Name", field: "bname", filter: true, sortable: true, resizable: true}
  ];

  columnDefs2 =[
    { headerName: "ID", field: "id"},
    { headerName: "First name", field: "fname"},
    { headerName: "Second name", field: "sname"},
    { headerName: "Email", field: "email"},
    { headerName: "Phone", field: "phone"},
    { headerName: "Bank City", field: "bcity"},
    { headerName: "Bank Name", field: "bname"}
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
  }

  private subscription: Subscription | null = null;

  async ngOnInit() {
    this.api.ListAccounts().then(event =>  {
      this.accounts = (event.items as Array<Account>);
    });
  
    this.subscription = <Subscription>this.api.OnCreateAccountListener.subscribe( (event: any) => {
      const newAccount = event.value.data.onCreateAccount;
      this.accounts = [newAccount, ...this.accounts];
    });
  }

  ngOnDestroy() {
    if(this.subscription) {
      this.subscription.unsubscribe();
    }
    this.subscription = null;
  }

  public onCreate(account: Account) {
    this.api
      .CreateAccount(account)
      .then((event) => {
        console.log('item created!');
        this.createForm.reset();
      })
      .catch((e) => {
        console.log('error creating account...', e);
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

}
