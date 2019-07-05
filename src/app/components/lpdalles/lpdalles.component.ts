import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-lpdalles',
  templateUrl: './lpdalles.component.html',
  styleUrls: ['./lpdalles.component.css']
})
export class LpdallesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    AOS.init();
  }

}
