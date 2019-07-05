import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-lgdalles',
  templateUrl: './lgdalles.component.html',
  styleUrls: ['./lgdalles.component.css']
})
export class LgdallesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    AOS.init();
  }

}
