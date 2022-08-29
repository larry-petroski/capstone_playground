import { Component, OnInit } from '@angular/core';

import { PrimeNGConfig } from 'primeng/api'
@Component({
  selector: 'sr-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
  }
}
