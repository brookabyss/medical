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
  showReg: Boolean;
  constructor(private _stakesService: StakesService, private _router: Router) { }

  ngOnInit() {
    this.error_messages=[];
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
    .catch(err=>console.log(err))
  }

}
