import { Component, OnInit, OnDestroy } from '@angular/core';
import { StakesService } from '../stakes.service'
import { Router } from '@angular/router'
import {ActivatedRoute} from "@angular/router";
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnDestroy {
  accounts: any;
  user_id: string;
  subscription: Subscription
  
  constructor(private _stakesService: StakesService, private _router: Router) { 
    this._stakesService.get_logged_in_user()
    .then(data=>{
      
      if(data.loggedin){
      
        this.user_id=data.user_id;
      
        this.subscription = this._stakesService.observedAccounts.subscribe(
          accounts => this.accounts = accounts,
          err => console.log(err),
          () => {}
        );
      
      }
      else{
        console.log("not logged in ")
        this._router.navigate([''])
      }
        

  
   })
    .catch(err=>{
      console.log(err);
    })
    
  }
  

  ngOnInit(){
    console.log("show component")
    
  }
  
  ngOnDestroy(){
    if(this.user_id){
       this.subscription.unsubscribe();
    }
   
    
  }

}
