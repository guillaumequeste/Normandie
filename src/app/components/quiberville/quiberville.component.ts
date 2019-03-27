import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-quiberville',
  templateUrl: './quiberville.component.html',
  styleUrls: ['./quiberville.component.css']
})
export class QuibervilleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    AOS.init();
  }

}
