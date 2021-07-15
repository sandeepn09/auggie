import { HttpHeaders } from "@angular/common/http";

export class AppConstants {
  public static readonly GENDER = new Map()
    .set("M", "He/Him/His")
    .set("F", "She/Her")
    .set("T", "They/Them")
    .set("N", "Not Specified");

  public static readonly ACCT_TYPE = new Map()
    .set("C", "Checking")
    .set("S", "Saving");

  public static readonly INCOME_RANGES = new Map()
    .set("0to35", "$0 - $35,000")
    .set("35to75", "$35,000 - $75,000")
    .set("75to125", "$75,000 - $125,000")
    .set("125", "More than $125,000");

  public static readonly YES_NO = new Map().set("Y", "Yes").set("N", "No");

  public static readonly PROVIDERS = new Map()
    .set(1, "https://assets.brandfetch.io/41d05924a6fd481.png")
    .set(2, "https://assets.brandfetch.io/e56d70e014a4403.png")
    .set(3, "https://assets.brandfetch.io/e7a1ac57ae64452.png")
    .set(4, "https://assets.brandfetch.io/097a35e020354b4.png")
    .set(5, "https://assets.brandfetch.io/559e95b8506747f.png")
    .set(6, "https://assets.brandfetch.io/715a04d2481c42c.png")
    .set(7, "https://assets.brandfetch.io/37af5f359b494b2.png");

  public static readonly HEADERS = new HttpHeaders()
    .set("content-type", "application/json")
    .set("Access-Control-Allow-Origin", "*");

  public static readonly COLORS: string[] = [
    "#c45829",
    "#572580",
    "#175075",
    "#f5f5dc",
    "#000000",
    "#0000ff",
    "#a52a2a",
    "#00ffff",
    "#00008b",
    "#008b8b",
    "#a9a9a9",
    "#006400",
    "#bdb76b",
    "#8b008b",
    "#556b2f",
    "#ff8c00",
    "#9932cc",
    "#8b0000",
    "#e9967a",
    "#9400d3",
    "#ff00ff",
    "#ffd700",
    "#008000",
    "#4b0082",
    "#f0e68c",
    "#add8e6",
    "#e0ffff",
    "#90ee90",
    "#d3d3d3",
    "#ffb6c1",
    "#ffffe0",
    "#00ff00",
    "#ff00ff",
    "#800000",
    "#000080",
    "#808000",
    "#ffa500",
    "#ffc0cb",
    "#800080",
    "#800080",
    "#ff0000",
    "#c0c0c0",
    "#ffffff",
    "#ffff00",
  ];
}
