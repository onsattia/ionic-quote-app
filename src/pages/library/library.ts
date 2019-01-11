import { Component } from "@angular/core";
import { IonicPage } from "ionic-angular";
import { QuotesPage } from "../quotes/quotes";
import { Page } from "ionic-angular/umd/navigation/nav-util";
import { QuotesProvider } from "../../services/quotes";

@IonicPage()
@Component({
  selector: "page-library",
  templateUrl: "library.html"
})
export class LibraryPage {
  quotesList: any;
  pushPage: Page;

  constructor(private quotesProvider: QuotesProvider) {}

  ionViewWillEnter() {
    this.pushPage = QuotesPage;
    this.quotesProvider.getAllQuotes().subscribe((quotesTable: any) => {
      this.quotesList = quotesTable.hits.hits;
    });
  }
}
