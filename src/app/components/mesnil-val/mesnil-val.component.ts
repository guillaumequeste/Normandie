import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-mesnil-val',
  templateUrl: './mesnil-val.component.html',
  styleUrls: ['./mesnil-val.component.css']
})
export class MesnilValComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    AOS.init();
  }

}
