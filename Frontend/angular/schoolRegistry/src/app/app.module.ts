import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TeachersComponent } from './teachers/teachers.component';
import { ClassInfoComponent } from './class-info/class-info.component';
import { StudentInfoComponent } from './student-info/student-info.component';
import { TeacherInfoComponent } from './teacher-info/teacher-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TeachersComponent,
    ClassInfoComponent,
    StudentInfoComponent,
    TeacherInfoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
