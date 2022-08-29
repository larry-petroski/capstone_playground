import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'sr-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title: String = '';

  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.title = this.titleService.getTitle();
    this.titleService.setTitle(`${this.title} - Home`)
  }

}
