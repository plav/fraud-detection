import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { APIService, Transaction} from './../API.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { AgGridAngular } from 'ag-grid-angular';
import Amplify, { Auth, Storage } from 'aws-amplify';
import * as AWS from 'aws-sdk';
import { Console } from 'console';

declare var TextDecoder: any;

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
    { headerName: "Probability", field: "prob", filter: true, sortable: true},
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
    { headerName: "V28", field: "v28", filter: true, sortable: true}
  ];

  id!: string; 
  time!: string;
  transactionAccountId!: string;
  amount!:string;
  prob!:string;
  v1!: number; 
  v2!: number;
  v3!:number;
  v4!:number;
  v5!:number;
  v6!:number;
  v7!:number;
  v8!:number;
  v9!:number;
  v10!:number;
  v11!:number;
  v12!:number;
  v13!:number;
  v14!:number;
  v15!:number;
  v16!:number;
  v17!:number;
  v18!:number;
  v19!:number;
  v20!:number;
  v21!:number;
  v22!:number;
  v23!:number;
  v24!:number;
  v25!:number;
  v26!:number;
  v27!:number;
  v28!:number;
  Class!:string;

  transaction!:JSON;

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
  
      onRowClicked(event: any) { 
        console.log('row', event); 
        this.id= event.data.id.toString();
        this.transactionAccountId= event.data.transactionAccountId.toString();
        this.time= event.data.time.toString();
        this.amount = event.data.amount.toString();
        this.prob = event.data.prob.toString();
        this.v1= event.data.v1.toString();
        this.v2= event.data.v2.toString();
        this.v3= event.data.v3.toString();
        this.v4= event.data.v4.toString();
        this.v5= event.data.v5.toString();
        this.v6= event.data.v6.toString();
        this.v7= event.data.v7.toString();
        this.v8= event.data.v8.toString();
        this.v9= event.data.v9.toString();
        this.v10= event.data.v10.toString();
        this.v11= event.data.v11.toString();
        this.v12= event.data.v12.toString();
        this.v13= event.data.v13.toString();
        this.v14= event.data.v14.toString();
        this.v15= event.data.v15.toString();
        this.v16= event.data.v16.toString();
        this.v17= event.data.v17.toString();
        this.v18= event.data.v18.toString();
        this.v19= event.data.v19.toString();
        this.v20= event.data.v20.toString();
        this.v21= event.data.v21.toString();
        this.v22= event.data.v22.toString();
        this.v23= event.data.v23.toString();
        this.v24= event.data.v24.toString();
        this.v25= event.data.v25.toString();
        this.v26= event.data.v26.toString();
        this.v27= event.data.v27.toString();
        this.v28= event.data.v28.toString();
      }

      onPred(){
        
        const jsonTransaction:JSON = <JSON><unknown>{
          "id": this.id, 
          "time": this.time,
          "transactionAccountId": this.transactionAccountId,
          "amount": this.amount,
          "prob": this.prob,
          "v1": this.v1,
          "v2": this.v2,
          "v3":this.v3,
          "v4":this.v4,
          "v5":this.v5,
          "v6":this.v6,
          "v7":this.v7,
          "v8":this.v8,
          "v9":this.v9,
          "v10":this.v10,
          "v11":this.v11,
          "v12":this.v12,
          "v13":this.v13,
          "v14":this.v14,
          "v15":this.v15,
          "v16":this.v16,
          "v17":this.v17,
          "v18":this.v18,
          "v19":this.v19,
          "v20":this.v20,
          "v21":this.v21,
          "v22":this.v22,
          "v23":this.v23,
          "v24":this.v24,
          "v25":this.v25,
          "v26":this.v26,
          "v27":this.v27,
          "v28":this.v28,
        }
        console.log(jsonTransaction);

        const arrayTransaction: any = [
          {
            id: this.id, 
            time: this.time,
            transactionAccountId: this.transactionAccountId,
            amount: this.amount,
            prob: this.prob,
            v1: this.v1,
            v2: this.v2,
            v3:this.v3,
            v4:this.v4,
            v5:this.v5,
            v6:this.v6,
            v7:this.v7,
            v8:this.v8,
            v9:this.v9,
            v10:this.v10,
            v11:this.v11,
            v12:this.v12,
            v13:this.v13,
            v14:this.v14,
            v15:this.v15,
            v16:this.v16,
            v17:this.v17,
            v18:this.v18,
            v19:this.v19,
            v20:this.v20,
            v21:this.v21,
            v22:this.v22,
            v23:this.v23,
            v24:this.v24,
            v25:this.v25,
            v26:this.v26,
            v27:this.v27,
            v28:this.v28
          }
      ];
        
        Storage.put("export.txt", arrayTransaction, {
          progressCallback(progress) {
            console.log(`Uploaded: ${progress.loaded}/${progress.total}`);
          },
        });

        AWS.config.credentials = new AWS.Credentials({
          accessKeyId: 'AKIA4C4HO2I7YU4WNBSW', secretAccessKey: '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'
        });
    
        const params = {
          Bucket: 'amplifyfraud47bd7f7c50d8482991d31567cf5c4fd0210839-dev',
          Key: 'public/result.html'
        };

        var isPaused = false;
        
        var string = "";
        let s3 = new AWS.S3();
        s3.getObject(params, function(err, data) {
          if (err) {
            console.error(err); // an error occurred
          } else {
            string = new TextDecoder('utf-8').decode(data.Body);
            console.log(string);
          }
        });
        console.log("String", string)
        this.Class= string.toString();
        console.log("Class", this.Class);
        var newC = this.Class.slice(-1);
        console.info("newC", newC);
        var players = ['Jim', 'Shawna', 'Andrew', 'Lora', 'Aimee', 'Nick'];
        console.log(players[5]);
      }

      onLoad(){
        var Time = 172793;
        var Probability= 0;
        var Amount= (Math.random() * (0 - 25692) + 0.0200).toFixed(2)
        var v1= (Math.random() * (-72.8 - 22.1) + 0.0200).toFixed(4)
        var v2= (Math.random() * (-28.4 - 9.4) + 0.0200).toFixed(4)
        var v3= (Math.random() * (-48.4 - 9.5) + 0.0200).toFixed(4)
        var v4= (Math.random() * (-5.7 - 16.9) + 0.0200).toFixed(4)
        var v5= (Math.random() * (-113.8 - 34.9) + 0.0200).toFixed(4)
        var v6= (Math.random() * (-26.2 - 73.3) + 0.0200).toFixed(4)
        var v7= (Math.random() * (-43.6 - 120.6) + 0.0200).toFixed(4)
        var v8= (Math.random() * (-73.3 - -3.6) + 0.0200).toFixed(4)
        var v9= (Math.random() * (-13.5 - 15.6) + 0.0200).toFixed(4)
        var v10= (Math.random() * (-24.6 - 23.8) + 0.0200).toFixed(4)
        var v11= (Math.random() * (-4.8 - 12.0) + 0.0200).toFixed(4)
        var v12= (Math.random() * (-18.7 - 7.9) + 0.0200).toFixed(4)
        var v13= (Math.random() * (-5.8 - 7.2) + 0.0200).toFixed(4)
        var v14= (Math.random() * (-19.3 - 10.6) + 0.0200).toFixed(4)
        var v15= (Math.random() * (-4.5 - 8.9) + 0.0200).toFixed(4)
        var v16= (Math.random() * (-14.2 - 17.4) + 0.0200).toFixed(4)
        var v17= (Math.random() * (-25.2 - 9.3) + 0.0200).toFixed(4)
        var v18= (Math.random() * (-9.5 - 0.4) + 0.0200).toFixed(4)
        var v19= (Math.random() * (-7.3 - 0.4) + 0.0200).toFixed(4)
        var v20= (Math.random() * (-21.7 - 39.5) + 0.0200).toFixed(4)
        var v21= (Math.random() * (-34.9 - 27.3) + 0.0200).toFixed(4)
        var v22= (Math.random() * (-11.0 - 10.5) + 0.0200).toFixed(4)
        var v23= (Math.random() * (-44.9 - 22.6) + 0.0200).toFixed(4)
        var v24= (Math.random() * (-2.9 - 4.6) + 0.0200).toFixed(4)
        var v25= (Math.random() * (-10.3 - 7.6) + 0.0200).toFixed(4)
        var v26= (Math.random() * (-2.7 - 3.6) + 0.0200).toFixed(4)
        var v27= (Math.random() * (-22.6 - 31.7) + 0.0200).toFixed(4)
        var v28= (Math.random() * (-15.5 - 33.9) + 0.0200).toFixed(4)
        console.log(v1)
      }
  
  }
