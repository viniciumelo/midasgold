import { Component } from '@angular/core';
import { NavController, ActionSheetController, App } from 'ionic-angular';
import { SettingPage } from '../setting/setting';
import { PerfilPage } from '../perfil/perfil';
import { LoginPage } from '../login/login';
import { CreditcardPage } from '../creditcard/creditcard';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController, public actionSheetCtrl: ActionSheetController, public _app: App ) {
  }

  onMenu() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Minhas Opções',
      buttons: [
        {
          text: 'Perfil',
          icon: 'person',
          handler: () => {
            this.navCtrl.push(PerfilPage);
          }
        },{
          text: 'Configurações',
          icon: 'settings',
          handler: () => {
            this.navCtrl.push(SettingPage);
          }
        },{
          text: 'Cartões',
          icon: 'card',
          handler: () => {
            this.navCtrl.push(CreditcardPage);
          }
        },{
          text: 'Sair',
          icon: 'power',
          handler: () => {
            this._app.getRootNav().setRoot(LoginPage);
          }
        },{
          text: 'Cancelar',
          icon: 'close'
        }
      ]
    });
    actionSheet.present();
  }
  
}
