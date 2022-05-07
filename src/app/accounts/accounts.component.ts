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
    
  public addForm: FormGroup;
  public updateForm: FormGroup;
  public deleteForm: FormGroup;

  /* declare restaurants variable */
  public accounts: Array<Account> = [];

  constructor(private api: APIService, private fb: FormBuilder, private router: Router,) {

    this.addForm = this.fb.group({
      id:new FormControl('',[Validators.required]),
      fname:new FormControl('',[Validators.required]),
      sname:new FormControl('',[Validators.required]),
      email:new FormControl('',[Validators.required,Validators.email]),
      phone:new FormControl('',[Validators.required]),
      bname:new FormControl('',[Validators.required]),
      bcity:new FormControl('',[Validators.required])
    })

    this.updateForm = this.fb.group({
      id:new FormControl('',[Validators.required]),
      fname:new FormControl('',[Validators.required]),
      sname:new FormControl('',[Validators.required]),
      email:new FormControl('',[Validators.required,Validators.email]),
      phone:new FormControl('',[Validators.required]),
      bname:new FormControl('',[Validators.required]),
      bcity:new FormControl('',[Validators.required])
    })

    this.deleteForm = this.fb.group({
      id:new FormControl('',[Validators.required])
    })

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
  object!: string;

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

    updateAccount(account : Account){
      console.log(this.id)
      console.log(this.updateForm.value)
      this.api
        .UpdateAccount(account)
      console.log('Updated');
    }

    addAccount(account : Account){
        this.addedAccount = uuid();
        console.log(this.addedAccount);
        console.log(this.addForm.value)
        this.api
          .CreateAccount(account)
        console.log('Added');
    }

    get iD(){
      return this.addForm.get('id');
    }
    get fnam(){
      return this.addForm.get('fname');
    }
    get snam(){
      return this.addForm.get('sname');
    }
    get emai(){
      return this.addForm.get('email');
    }
    get pnu(){
      return this.addForm.get('phone');
    }
    get bnam(){
      return this.addForm.get('bname');
    }
    get bcit(){
      return this.addForm.get('bcity');
    }

    get iD2(){
      return this.updateForm.get('id');
    }
    get fnam2(){
      return this.updateForm.get('fname');
    }
    get snam2(){
      return this.updateForm.get('sname');
    }
    get emai2(){
      return this.updateForm.get('email');
    }
    get pnu2(){
      return this.updateForm.get('phone');
    }
    get bnam2(){
      return this.updateForm.get('bname');
    }
    get bcit2(){
      return this.updateForm.get('bcity');
    }

    get iD3(){
      return this.deleteForm.get('id');
    }

    onRowClicked(event: any){
      this.object = event.data.toString();
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

    idGenetate(){
      this.addedAccount = uuid();
    }

    deleteAccount(account : Account){
      console.log(this.deleteForm.value)
      this.api
        .DeleteAccount(account)
      console.log('Deleted');
    }
}
