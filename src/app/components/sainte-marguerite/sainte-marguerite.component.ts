import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-sainte-marguerite',
  templateUrl: './sainte-marguerite.component.html',
  styleUrls: ['./sainte-marguerite.component.css']
})
export class SainteMargueriteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    AOS.init();
  }

}
