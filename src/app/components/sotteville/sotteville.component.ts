import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-sotteville',
  templateUrl: './sotteville.component.html',
  styleUrls: ['./sotteville.component.css']
})
export class SottevilleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    AOS.init();
  }

}
