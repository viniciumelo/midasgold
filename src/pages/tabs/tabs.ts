import { Component } from '@angular/core';

import { ReceivablePage } from '../receivable/receivable';
import { PayPage } from '../pay/pay';
import { HomePage } from '../home/home';
import { HistoryPage } from '../history/history';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = PayPage;
  tab3Root = ReceivablePage;
  tab4Root = HistoryPage;

  constructor() {

  }
}
