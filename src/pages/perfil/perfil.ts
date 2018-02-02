import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {

  public data: any;

  private empresaShow:boolean=false;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
  }

  cepBlurEvent(e:any) {
    let cep = e.target.value;
    let url = `https://viacep.com.br/ws/${cep}/json/`;
    this.http.get(url)
      .map(res => res.json())
      .subscribe(data => {
        this.data = data;
      });
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
