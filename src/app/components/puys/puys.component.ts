import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-puys',
  templateUrl: './puys.component.html',
  styleUrls: ['./puys.component.css']
})
export class PuysComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    AOS.init();
  }

}
