import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions} from '@angular/http'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise'
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Patient } from './patient'




@Injectable()
export class StakesService {
   
  observedStakeHolder = new BehaviorSubject(null);
  observedAccounts = new BehaviorSubject([]);
  observedMedications = new BehaviorSubject(null);
  observedPatient = new BehaviorSubject(new Patient);
  
  constructor(private _http: Http) {
  }
  
  updatePatient(patient){
   
    this.observedPatient.next(patient);
  }
  
  updateStakeHolder(stakeholder){
   
    this.observedStakeHolder.next(stakeholder)
  }
  
  updateAccounts(accounts){
    if (this.observedAccounts==null){
      this.observedAccounts.next([])
    }
    console.log(accounts)
    this.observedAccounts.next(accounts)
  }
  
  register(stakeholder){
      console.log("register service")
      return this._http.post('/register',stakeholder).map(data=>data.json()).toPromise()
  }
  
  login(stakeholder){
      console.log("service login")
      return this._http.post('/login',stakeholder).map(data=>data.json()).toPromise()
  }
  
  
  addPatient(patient){
    return this._http.post('/add/patient',patient).map(data=>data.json()).toPromise()
  }
  
  get_logged_in_user(){
    return this._http.get('/user/loggedin').map(data=>data.json()).toPromise()
  }
 
//   addSite(site){
//     console.log("service login")
//     console.log(site)
//     return this._http.post('/site/create',site).map(data=>data.json()).toPromise()
//   }
}

