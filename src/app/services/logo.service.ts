import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { LogoResponse } from "../models/user/payment-models";
import { from, Observable, throwError } from "rxjs";
import { map, catchError } from "rxjs/operators";

const logoApi = "https://api.brandfetch.io/v1/logo";

@Injectable({
  providedIn: "root",
})
export class LogoService {
  private logoUrl = "";
  constructor(private http: HttpClient) {}

  getInfo(provider: string): Observable<any> {
    const headers = {
      "x-api-key": "DdL6YLjg53aMYZatcR5GLhO1VM28JZ83gEH9GGr0",
      "Content-Type": "application/json",
    };
    const body = { domain: provider };
    return this.http.post<any>(logoApi, body, { headers });
  }
}
