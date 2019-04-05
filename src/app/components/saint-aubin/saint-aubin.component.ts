import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-saint-aubin',
  templateUrl: './saint-aubin.component.html',
  styleUrls: ['./saint-aubin.component.css']
})
export class SaintAubinComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    AOS.init();
  }

}
