import { Component } from "@angular/core";
import { IonicPage, NavParams, AlertController } from "ionic-angular";
import { QuotesProvider } from "../../services/quotes";
import { Quote } from "../../data/quote.interface";
// import quotes from "../../data/quotes";

@IonicPage()
@Component({
  selector: "page-quotes",
  templateUrl: "quotes.html"
})
export class QuotesPage {
  quote: any;
  constructor(
    private navParams: NavParams,
    private alertCtrl: AlertController,
    private quotesProvider: QuotesProvider
  ) {
    this.quote = this.navParams.data;
  }

  onAddToFavorite(selectedQuote: Quote) {
    const confirm = this.alertCtrl.create({
      title: "Add quote to favorite",
      message: "Do you want to add this quote to your favorite?",
      buttons: [
        {
          text: "Yes",
          handler: () => {
            this.quotesProvider
              .addQuoteToFavorites(selectedQuote)
              .subscribe((result: any) => {});
          }
        },
        {
          text: "No"
        }
      ]
    });
    confirm.present();
  }
}
