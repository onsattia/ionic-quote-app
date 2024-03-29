import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";
import { HttpClientModule } from "@angular/common/http";

import { MyApp } from "./app.component";
import { FavoritesPage } from "../pages/favorites/favorites";
import { LibraryPage } from "../pages/library/library";
import { TabsPage } from "../pages/tabs/tabs";
import { QuotesPage } from "../pages/quotes/quotes";
import { QuotesProvider } from "../services/quotes";
import { QuotePage } from "../pages/quote/quote";

@NgModule({
  declarations: [
    MyApp,
    FavoritesPage,
    LibraryPage,
    TabsPage,
    QuotesPage,
    QuotePage
  ],
  imports: [BrowserModule, HttpClientModule, IonicModule.forRoot(MyApp)],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FavoritesPage,
    LibraryPage,
    TabsPage,
    QuotesPage,
    QuotePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    QuotesProvider,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
