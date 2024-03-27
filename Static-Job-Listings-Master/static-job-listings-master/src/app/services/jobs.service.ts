import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from '../domain/card';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  constructor(private http: HttpClient) { }

  getData(): Observable<Card[]> {
    return this.http.get<Card[]>('../../assets/data.json');
  }
}
