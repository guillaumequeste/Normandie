import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-veulettes',
  templateUrl: './veulettes.component.html',
  styleUrls: ['./veulettes.component.css']
})
export class VeulettesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    AOS.init();
  }

}
