import { HttpHeaders } from "@angular/common/http";

export class AppConstants {
  public static readonly GENDER = new Map()
    .set("M", "He/Him/His")
    .set("F", "She/Her")
    .set("O", "Other")
    .set("N", "Not Specified");

  public static readonly HEADERS = new HttpHeaders()
    .set("content-type", "application/json")
    .set("Access-Control-Allow-Origin", "*");
}
