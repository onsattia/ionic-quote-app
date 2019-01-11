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

  onViewQuote(quote: Quote) {
    const modal = this.modalCtrl.create(QuotePage, quote);
    modal.present();
    modal.onWillDismiss(() => {
      this.quotesProvider
        .getFavoriteQuotes()
        .subscribe((FavoritesTable: any) => {
          this.favoritesList = FavoritesTable.hits.hits;
        });
    });
  }

  onRemoveFromFavorite(quoteId: any) {
    this.quotesProvider
      .removeQuoteFromFavorite(quoteId)
      .subscribe((result: any) => {});
  }
}
