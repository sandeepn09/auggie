import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  post(endpoint: string, data: any, headers: HttpHeaders) {

    const options = {headers: headers, withCredentials: false};
    const url = environment.apiBaseUrl + endpoint;

    return this.http.post(url, JSON.stringify(data), options);
  }
}
