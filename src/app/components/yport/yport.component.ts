import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-yport',
  templateUrl: './yport.component.html',
  styleUrls: ['./yport.component.css']
})
export class YportComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    AOS.init();
  }

}
