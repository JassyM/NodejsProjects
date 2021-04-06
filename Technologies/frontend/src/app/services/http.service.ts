import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Technology } from '../models/technology.model';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private baseUrl: string = environment.BASE_API_URL;

  constructor(private readonly http: HttpClient) {}

  public getTechnologies(): Observable<Technology[]> {
    return this.http.get<Technology[]>(`${this.baseUrl}/technologies`);
  }

  public getTechnology(id: string): Observable<Technology> {
    return this.http.get<Technology>(`${this.baseUrl}/technology/${id}`);
  }

  public searchTechnology(query: string): Observable<Technology[]> {
    return this.http.get<Technology[]>(`${this.baseUrl}/technology/search/${query}`);
  }
}
