import { Component } from "@angular/core";
import { ViewController, NavParams } from "ionic-angular";
import { QuotesProvider } from "../../services/quotes";

@Component({
  selector: "page-quote",
  templateUrl: "quote.html"
})
export class QuotePage {
  author: string;
  text: string;

  constructor(
    private viewCtrl: ViewController,
    private navParams: NavParams,
    private quotesProvider: QuotesProvider
  ) {}

  ionViewDidLoad() {
    this.author = this.navParams.data._source.author;
    this.text = this.navParams.data._source.text;
  }

  onClose() {
    this.viewCtrl.dismiss();
  }

  onUnfavorite() {
    console.log(this.navParams.data._id);

    this.quotesProvider
      .removeQuoteFromFavorites(this.navParams.data._id)
      .subscribe((result: any) => {});
  }
}