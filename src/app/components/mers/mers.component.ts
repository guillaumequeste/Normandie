import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-mers',
  templateUrl: './mers.component.html',
  styleUrls: ['./mers.component.css']
})
export class MersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    AOS.init();
  }

}
