import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SettingPage } from '../setting/setting';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  settingPage: typeof SettingPage;

  constructor(public navCtrl: NavController) {
    this.settingPage = SettingPage;
  }
  
}
