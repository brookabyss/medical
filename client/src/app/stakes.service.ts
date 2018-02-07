import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions} from '@angular/http'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise'
import { BehaviorSubject } from 'rxjs/BehaviorSubject';





@Injectable()
export class StakesService {
   
  observedStakeHolder = new BehaviorSubject(null)
  observedAccounts = new BehaviorSubject([])
  observedMedications = new BehaviorSubject(null)
  
  constructor(private _http: Http) {
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
      return this._http.post('/register',stakeholder).map(data=>data.json()).toPromise()
  }
  
  login(stakeholder){
      console.log("service login")
      return this._http.post('/login',stakeholder).map(data=>data.json()).toPromise()
  }
  
//   get_logged_in_account(){
//     return this._http.get('/account/loggedin').map(data=>data.json()).toPromise()
//   }
 
//   addSite(site){
//     console.log("service login")
//     console.log(site)
//     return this._http.post('/site/create',site).map(data=>data.json()).toPromise()
//   }
}

