import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NasaService {
  url(url: any) {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) { }

  getImageOfTheDay(): Observable<any> {
    return this.http.get<any>("https://api.nasa.gov/planetary/apod?api_key=4PKhilDQvozBXOhhYDoA2Q4WgkQhUT766I8ncA8e")
  }
}