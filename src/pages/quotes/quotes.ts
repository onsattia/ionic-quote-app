import { Component } from "@angular/core";
import { IonicPage, NavParams, AlertController } from "ionic-angular";
import { Quote } from "@angular/compiler";
import quotes from "../../data/quotes";

@IonicPage()
@Component({
  selector: "page-quotes",
  templateUrl: "quotes.html"
})
export class QuotesPage {
  quote: { category: string; quotes: Quote[]; icon: string }[];
  constructor(
    private navParams: NavParams,
    private alertCtrl: AlertController
  ) {
    this.quote = this.navParams.data;
  }

  onAddToFavorite(selectedQuote: Quote) {
    const confirm = this.alertCtrl.create({
      title: "Favorite this quote?",
      message: "Do you want to add this quote as favorite?",
      buttons: [
        {
          text: "Yes"
        },
        {
          text: "No"
        }
      ]
    });
    confirm.present();
  }
}
