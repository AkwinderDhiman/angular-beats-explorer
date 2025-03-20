import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApisService {
  private apiUrl = 'https://api-server.illpeoplemusic.com/api/v2/playlist/trending';

  constructor(private http: HttpClient) {}

  getBeats(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
