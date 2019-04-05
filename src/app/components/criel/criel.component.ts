import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-criel',
  templateUrl: './criel.component.html',
  styleUrls: ['./criel.component.css']
})
export class CrielComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    AOS.init();
  }

}
