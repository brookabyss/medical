import { Component, OnInit, OnDestroy } from '@angular/core';
import { StakesService } from '../stakes.service'
import { Router } from '@angular/router'
import { Patient } from '../patient'
import { Subscription } from "rxjs";

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent implements OnDestroy {
  error_messages: any;
  errors:any;
  patient: Patient= new Patient;
  subscription: Subscription;
  user_id: string;
  
  constructor(private _stakesService: StakesService, private _router: Router) {
    this.subscription = this._stakesService.observedPatient.subscribe(
      patient => this.patient = patient,
      err => console.log(err),
      () => {}
    )
    
  }

  ngOnInit() {
    this.error_messages=[];
   
    
  }
  
  onCreate(){
    console.log("new-patient");
    console.log(this.patient);
    this._stakesService.addPatient(this.patient)
    .then(data=>{
      console.log(data);
      this._stakesService.updatePatient(this.patient);
      this._stakesService.updateAccounts(data.accounts);
      console.log(data.user_id)
      this._router.navigate(['/accounts/show/',data.user_id])
    })
    .catch(err=>{
      console.log(err);
    })
  }
  
  ngOnDestroy(){
    this.subscription.unsubscribe();
    
  }

}
