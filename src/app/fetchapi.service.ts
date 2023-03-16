import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FetchapiService {
  constructor(private http: HttpClient) {}
  displaydata() {
    let url =
      'https://s3-ap-southeast-1.amazonaws.com/he-public-data/gamesarena274f2bf.json';
    return this.http.get(url);
  }
}
