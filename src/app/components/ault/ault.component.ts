import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-ault',
  templateUrl: './ault.component.html',
  styleUrls: ['./ault.component.css']
})
export class AultComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    AOS.init();
  }

}
