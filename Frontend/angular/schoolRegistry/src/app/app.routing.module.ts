import { NgModule } from '@angular/core';
import { RouterModule, Routes, Route } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { TeachersComponent } from './teachers/teachers.component';

const fallbackRoute: Route = { path: '**', component: HomeComponent}

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'teachers', component: TeachersComponent },
    { path: 'teachers/:id', component: TeachersComponent },
    fallbackRoute
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}