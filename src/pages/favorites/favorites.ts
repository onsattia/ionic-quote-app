import { Component } from "@angular/core";
import { ModalController } from "ionic-angular";
import { QuotesProvider } from "../../services/quotes";
import { Quote } from "@angular/compiler";
import { QuotePage } from "../quote/quote";

@Component({
  selector: "page-favorites",
  templateUrl: "favorites.html"
})
export class FavoritesPage {
  favoritesList: any;

  constructor(
    private quotesProvider: QuotesProvider,
    private modalCtrl: ModalController
  ) {}

  ionViewWillEnter() {
    this.quotesProvider.getFavoriteQuotes().subscribe((FavoritesTable: any) => {
      this.favoritesList = FavoritesTable.hits.hits;
    });
  }

  // ionViewWillEnter() {
  //   this.quotes = this.quotesService.getFavoriteQuotes();
  // }

  onViewQuote(quote: Quote) {
    const modal = this.modalCtrl.create(QuotePage, quote);
    modal.present();
  }
}
