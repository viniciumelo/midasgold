import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { NFC, Ndef } from '@ionic-native/nfc';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController, private nfc: NFC, private ndef: Ndef) {

  }

  pagar(){
  }

}
