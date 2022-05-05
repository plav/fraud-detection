import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { APIService, Account} from './../API.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { AgGridAngular } from 'ag-grid-angular';
import * as myGlobals from '../globals'; //<==== this one (**Updated**)
import { ValueCache } from 'ag-grid-community';
import { newArray } from '@angular/compiler/src/util';
import { v4 as uuid } from "uuid";



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

  id!: string; 
  fname!: string;
  sname!: string;
  email!: string;
  phone!: string;
  bname!: string;
  bcity!: string;

  addedAccount!: string;
  
  async ngOnInit() {
    this.api.ListAccounts().then(event =>  {
      this.accounts = (event.items as Array<Account>);
    });

    this.addedAccount = " ";
  
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
    
    updateForm = new FormGroup({
      fnamef:new FormControl('',[Validators.required]),
      snamef:new FormControl('',[Validators.required]),
      emailf:new FormControl('',[Validators.required,Validators.email]),
      pnumf:new FormControl('',[Validators.required]),
      bnamef:new FormControl('',[Validators.required]),
      bcityf:new FormControl('',[Validators.required])
    })

    updateAccount(){
      console.log(this.id)
      console.log(this.updateForm.value)
    }

    addAccount(){
        this.addedAccount = uuid();
        console.log(this.addedAccount);
        console.log(this.updateForm.value)
    }

    get fnam(){
      return this.updateForm.get('fnamef');
    }
    get snam(){
      return this.updateForm.get('snamef');
    }
    get emai(){
      return this.updateForm.get('emailf');
    }
    get pnu(){
      return this.updateForm.get('pnumf');
    }
    get bnam(){
      return this.updateForm.get('bnamef');
    }
    get bcit(){
      return this.updateForm.get('bcityf');
    }

    onRowClicked(event: any){
      this.id= event.data.id.toString();
      this.fname = event.data.fname.toString()
      this.sname = event.data.sname.toString()
      this.email= event.data.email.toString()
      this.phone= event.data.phone.toString()
      this.bname= event.data.bname.toString()
      this.bcity= event.data.bcity.toString()
    } 


    onButtonClicked(){
      console.log(this.id)
      console.log(this.fname)
      console.log(this.sname)
      console.log(this.email)
      console.log(this.phone)
      console.log(this.bname)
      console.log(this.bcity)
    }
}
