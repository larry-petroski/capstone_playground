import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { RippleModule } from 'primeng/ripple';
import {MenubarModule} from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';

import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TeachersComponent } from './teachers/teachers.component';
import { ClassInfoComponent } from './class-info/class-info.component';
import { StudentInfoComponent } from './student-info/student-info.component';
import { TeacherInfoComponent } from './teacher-info/teacher-info.component';
import { HeaderComponent } from './header/header.component';
import { TeacherCardComponent } from './teachers/teacher-card/teacher-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TeachersComponent,
    ClassInfoComponent,
    StudentInfoComponent,
    TeacherInfoComponent,
    HeaderComponent,
    TeacherCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    RippleModule,
    MenubarModule,
    InputTextModule,
    ButtonModule,
    AvatarModule,
    AvatarGroupModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
