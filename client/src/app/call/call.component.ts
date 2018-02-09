import { Component, OnInit } from '@angular/core';
import { StakeHolder } from './stakeholder'
import { StakesService } from '../stakes.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-call',
  templateUrl: './call.component.html',
  styleUrls: ['./call.component.css']
})
export class CallComponent implements OnInit {
  flow: Boolean;
  stakeholder: StakeHolder= new StakeHolder;
  error_messages: any;
  errors:any;
  showReg: Boolean;
  constructor(private _stakesService: StakesService, private _router: Router) { 
     this.error_messages=[];
  }

  ngOnInit() {
   
    this.flow=false;
    this.showReg=false;
  }
  onClick(){
    this.flow=!this.flow;
    this.showReg=false;
    console.log(this.flow)
  }
  toggleReg(){
    this.showReg=!this.showReg;
    this.flow=false;
  }
  onLogin(){
    console.log(this.stakeholder)
    this._stakesService.login(this.stakeholder)
  }
  onRegister(){
    console.log(this.stakeholder)
    this._stakesService.register(this.stakeholder)
    .then(data=>{
        console.log("returned account register method")
        console.log(data)}
      
      )
    .catch(err=>{
      this.errors=JSON.parse( err['_body'] );
      for (let e in this.errors['errors']){
        this.error_messages.push(this.errors['errors'][e]['message'])
      }
      // this.error_messages=err.body.messages;
      // console.log(err.body.messages)
      this.stakeholder=new StakeHolder;
      console.log("redirecting.. .. . . . .Brook");
      this._router.navigate([''])
      
    })
  }

}
