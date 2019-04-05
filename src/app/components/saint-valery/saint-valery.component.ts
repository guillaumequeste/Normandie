import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-saint-valery',
  templateUrl: './saint-valery.component.html',
  styleUrls: ['./saint-valery.component.css']
})
export class SaintValeryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    AOS.init();
  }

}
