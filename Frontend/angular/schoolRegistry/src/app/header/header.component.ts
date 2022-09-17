import { Component, OnInit } from '@angular/core';

import { MenuItem } from 'primeng/api/menuitem';

import { Grade } from '../models/Grade';
import { GradesService } from '../services/grades.service';

@Component({
  selector: 'sr-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  menus!: MenuItem[];
  grades!: Grade[];

  constructor(private gradesSvc: GradesService) { }

  ngOnInit(): void {
    this.fetchGrades();
  }

  fetchGrades(): void {
    this.gradesSvc.getGrades<Grade[]>().subscribe({
      next: grade => {
        this.grades = grade;
        this.setMenuItems(this.grades);
      },
      error: err => console.error(err),
      complete: () => {}
    });
  }

  setMenuItems(grade:any): void {
    const homeMenu: MenuItem =  { label: 'Home', icon: 'pi pi-home', routerLink: [''] };
    
    this.menus = [
      homeMenu
    ];

    grade.forEach((grade: any) => {
      const item: MenuItem = { label: grade.Heading, routerLink: ['teachers', grade.GradeId] };
      this.menus.push(item);
    });
  }

}
