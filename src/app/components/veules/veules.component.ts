import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-veules',
  templateUrl: './veules.component.html',
  styleUrls: ['./veules.component.css']
})
export class VeulesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    AOS.init();
  }

}
