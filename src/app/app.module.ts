import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ReceivablePage } from '../pages/receivable/receivable';
import { PayPage } from '../pages/pay/pay';
import { HomePage } from '../pages/home/home';
import { HistoryPage } from '../pages/history/history';
import { SettingPage } from '../pages/setting/setting';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';

import { NFC, Ndef } from '@ionic-native/nfc';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    ReceivablePage,
    PayPage,
    HomePage,
    HistoryPage,
    SettingPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      tabsHideOnSubPages: true,
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    ReceivablePage,
    PayPage,
    HomePage,
    HistoryPage,
    SettingPage,
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
