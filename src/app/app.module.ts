import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ReceivablePage } from '../pages/receivable/receivable';
import { PayPage } from '../pages/pay/pay';
import { HomePage } from '../pages/home/home';
import { HistoryPage } from '../pages/history/history';
import { TabsPage } from '../pages/tabs/tabs';

import { NFC, Ndef } from '@ionic-native/nfc';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    ReceivablePage,
    PayPage,
    HomePage,
    HistoryPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ReceivablePage,
    PayPage,
    HomePage,
    HistoryPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NFC,
    Ndef
  ]
})
export class AppModule {}
