import { Component, OnInit } from '@angular/core';

import { MenuItem } from 'primeng/api/menuitem';

@Component({
  selector: 'sr-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  grades!: MenuItem[];

  constructor() { }

  ngOnInit(): void {
    this.grades = [
      {
        label: 'Home',
        icon: 'pi pi-home'
      },
      {
        label: '(K) Kinder...',
      },      
      {
        label: '(1) First',
      },
      {
        label: '(2) Second',
      },
      {
        label: '(3) Third',
      },
      {
        label: '(4) Fourth',
      },
      {
        label: '(5) Fifth',
      }
    ];
  }

}
