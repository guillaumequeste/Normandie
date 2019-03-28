import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-belleville',
  templateUrl: './belleville.component.html',
  styleUrls: ['./belleville.component.css']
})
export class BellevilleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    AOS.init();
  }

}
