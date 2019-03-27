import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-le-treport',
  templateUrl: './le-treport.component.html',
  styleUrls: ['./le-treport.component.css']
})
export class LeTreportComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    AOS.init();
  }

}
