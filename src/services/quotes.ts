import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Quote } from "../data/quote.interface";

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

  // getQuote(id: any) {
  //   let url = "/es/quote/" + id;
  //   return this.http.get(url, { headers: this.header });
  // }

  addQuoteToFavorites(quote: Quote) {
    let url = "/favorites/favorite/";
    return this.http.post(
      url,
      { id: quote.id, text: quote.text, author: quote.author },
      { headers: this.header }
    );
  }

  removeQuoteFromFavorites(favoriteId: any) {
    let url = "/favorites/favorite/" + favoriteId;
    console.log("URL", url);
    return this.http.delete(url, { headers: this.header });
  }

  getFavoriteQuotes() {
    return this.http.get("favorites/_search", {
      headers: this.header
    });
  }
}
