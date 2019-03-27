import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-varengeville',
  templateUrl: './varengeville.component.html',
  styleUrls: ['./varengeville.component.css']
})
export class VarengevilleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    AOS.init();
  }

}
