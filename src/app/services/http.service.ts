import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class HttpService {
  constructor(private http: HttpClient) {}

  post(endpoint: string, data: any, headers: HttpHeaders) {
    const options = { headers: headers, withCredentials: false };
    const url = environment.apiBaseUrl + "/" + endpoint;
    const strData = JSON.stringify(data);
    console.log("Post Data", strData);

    return this.http.post(url, strData, options);
  }

  get(endpoint: string, params: any, headers: HttpHeaders) {
    const options = { headers: headers, params: params };
    const url = environment.apiBaseUrl + "/" + endpoint;
    // const strData = JSON.stringify(data);
    console.log("Get Data", params);

    return this.http.get(url, options);
  }
}
