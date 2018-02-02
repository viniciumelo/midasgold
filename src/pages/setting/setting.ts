import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {

  private passwordShow:boolean=false;
  private digitalShow:boolean=false;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  onPasswordElement(e:any, showMeAd) {    
    if(e.checked == true){
      this.passwordShow=true;
    } else {
      this.passwordShow=false;
    }
  }

  onDigitalElement(e:any, showMeAd) {    
    if(e.checked == true){
      this.digitalShow=true;
    } else {
      this.digitalShow=false;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingPage');
  }

}
