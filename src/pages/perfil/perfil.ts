import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {

  private empresaShow:boolean=false;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  onDadosEmpresaElement(e:any, showMeAd) {    
    if(e.checked == true){
      this.empresaShow=true;
    } else {
      this.empresaShow=false;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilPage');
  }

}
