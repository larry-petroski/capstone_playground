import { Component, OnInit } from '@angular/core';
import { Teacher } from '../models/Teacher';

@Component({
  selector: 'sr-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {

  teachers: Teacher[] = [
    new Teacher(1, 'Mr. Larry', '2', '1234567890', 'test@test.com', 7, '../../../assets/images/Westly.png', []),
    new Teacher(2, 'Mrs. Ray', '1', '9876543120', 'test2@test.com', 7, '../../../assets/images/ray.png', []),
    new Teacher(3, 'Ms. Rachelle', '3', '4521378906', 'test3@test.com', 7, '../../../assets/images/Rachelle.png', []),
    new Teacher(1, 'Mr. Larry', '2', '1234567890', 'test@test.com', 7, '../../../assets/images/Westly.png', []),
    new Teacher(2, 'Mrs. Ray', '1', '9876543120', 'test2@test.com', 7, '../../../assets/images/ray.png', []),
    new Teacher(3, 'Ms. Rachelle', '3', '4521378906', 'test3@test.com', 7, '../../../assets/images/Rachelle.png', [])
  ];

  constructor() { }

  ngOnInit(): void {
    console.log(this.teachers);
  }

}
