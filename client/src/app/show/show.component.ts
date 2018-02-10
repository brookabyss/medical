import { Component, OnInit } from '@angular/core';
import { StakesService } from '../stakes.service'
import { Router } from '@angular/router'
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  accounts: any
  constructor(private _stakesService: StakesService, private _router: Router) { 
    
  }

  ngOnInit() {
    this.accounts=[];
  }

}
