import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-berneval',
  templateUrl: './berneval.component.html',
  styleUrls: ['./berneval.component.css']
})
export class BernevalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    AOS.init();
  }

}
