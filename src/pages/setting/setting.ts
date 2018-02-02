import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  onPasswordElement(e:any, showMeAd) {    
    if(e.checked == true){
      document.getElementById('passwordInput').removeAttribute("disabled");
    } else {
      alert('advertisment off');
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingPage');
  }

}
