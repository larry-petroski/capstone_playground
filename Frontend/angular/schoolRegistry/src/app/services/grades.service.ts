import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Grade } from '../models/Grade';

@Injectable({
  providedIn: 'root'
})
export class GradesService {

  private gradesUrl: string = 'http://localhost:8085/api/grades';

  constructor(private http: HttpClient) { }

  getGrades<Grade>(): Observable<Grade> {
    return this.http.get<Grade>(this.gradesUrl);
  }
}
