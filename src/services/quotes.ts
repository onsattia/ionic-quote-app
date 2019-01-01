import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Quote } from "../data/quote.interface";

@Injectable()
export class QuotesProvider {
  private favoriteQuotes: Quote[] = [];
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

  addQuoteToFavorites(quote: Quote) {
    this.favoriteQuotes.push(quote);
    console.log(this.favoriteQuotes);
  }

  addQuoteRemoveFromFavorites(quote: Quote) {
    const position = this.favoriteQuotes.findIndex((quoteEl: Quote) => {
      return quoteEl.id == quote.id;
    });
    this.favoriteQuotes.splice(position, 1);
  }

  getFavoriteQuotes() {
    return this.favoriteQuotes.slice();
  }
}
