import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Exoplanet } from '../models/exoplanet';

@Injectable({
  providedIn: 'root'
})
export class ExoplanetService {

  constructor(private http: HttpClient) { }
  private baseUrl: string = "https://api-exoplanets.herokuapp.com/exoplanets"
    public getAll(): Observable<Exoplanet[]>{
      return this.http.get<Exoplanet[]>(this.baseUrl);
      
    }
  
}
