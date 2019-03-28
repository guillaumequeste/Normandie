import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-pourville',
  templateUrl: './pourville.component.html',
  styleUrls: ['./pourville.component.css']
})
export class PourvilleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    AOS.init();
  }

}
