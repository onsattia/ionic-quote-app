import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class Quotes {
  constructor(public http: HttpClient) {}
  getAllQuotes() {
    return this.http.get("../www/assets/json/quotes.json");
  }
}
