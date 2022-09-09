import { Component, Input, OnInit } from '@angular/core';
import { Teacher } from '../../models/Teacher';

@Component({
  selector: 'sr-teacher-card',
  templateUrl: './teacher-card.component.html',
  styleUrls: ['./teacher-card.component.css']
})
export class TeacherCardComponent implements OnInit {
  @Input() teacher!: Teacher;

  constructor() { }

  ngOnInit(): void {
  }

}
