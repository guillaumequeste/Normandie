import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-saint-pierre-en-port',
  templateUrl: './saint-pierre-en-port.component.html',
  styleUrls: ['./saint-pierre-en-port.component.css']
})
export class SaintPierreEnPortComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    AOS.init();
  }

}
