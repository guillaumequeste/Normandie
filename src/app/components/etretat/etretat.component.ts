import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-etretat',
  templateUrl: './etretat.component.html',
  styleUrls: ['./etretat.component.css']
})
export class EtretatComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    AOS.init();
  }

}
