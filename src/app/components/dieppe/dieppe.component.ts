import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-dieppe',
  templateUrl: './dieppe.component.html',
  styleUrls: ['./dieppe.component.css']
})
export class DieppeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    AOS.init();
  }

}
