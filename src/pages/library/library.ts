import { Component } from "@angular/core";
import { IonicPage } from "ionic-angular";
// import { Quote } from "../../data/quote.interface";
// import quotes from "../../data/quotes";
import { QuotesPage } from "../quotes/quotes";
import { Page } from "ionic-angular/umd/navigation/nav-util";
import { QuotesProvider } from "../../services/quotes";

@IonicPage()
@Component({
  selector: "page-library",
  templateUrl: "library.html"
})
export class LibraryPage {
  // quoteCollection: { category: string; quotes: Quote[]; icon: string }[];
  quotesList: any;
  pushPage: Page;

  constructor(private quotesProvider: QuotesProvider) {}

  ionViewWillEnter() {
    this.quotesProvider.getAllQuotes().subscribe((quotesTable: any) => {
      this.pushPage = QuotesPage;
      this.quotesList = quotesTable.hits.hits;
    });
  }
}
