import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable()
export class QuotesProvider {
  header: HttpHeaders;
  constructor(public http: HttpClient) {
    this.header = new HttpHeaders();
    this.header = this.header.append("Content-Type", "application/json");
    this.header = this.header.append("Accept", "application/json");
  }

  getAllQuotes() {
    return this.http.get("/es/quote/_search", { headers: this.header });
  }

  getQuote(id) {
    let url = "/es/quote/" + id;
    return this.http.get(url, { headers: this.header });
  }
}
