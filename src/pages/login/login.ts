import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, LoadingController } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';
import { LoginUser } from '../../app/models/login';
//import { HomePage } from '../home/home';
import { TabsPage } from '../tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [
    ServiceProvider
  ]
})
export class LoginPage {


  public userResposta = {} as LoginUser;
  public idUser1: any;
  public userData = {} as LoginUser;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private serviceProvider: ServiceProvider,
    public actionSheetCtrl: ActionSheetController,
    public loadingCtrl: LoadingController

  ) {
  }


  onButtonClick_OLD(user: LoginUser) {

    this.serviceProvider.getLogar(user).subscribe(
      data => {
        const response = (data as any);
        const objeto_retorno = JSON.parse(response._body);

        if (objeto_retorno === null) {
          this.presentActionSheet();
        } else {
          this.userResposta = objeto_retorno;
        }
        if (this.userResposta.senha == "OK" || this.userResposta.login != null) {
          this.idUser1 = this.userResposta.id;
          this.userData.login = null;
          this.userData.senha = null;
 
        //s  this.passaIdUser();
        }
      }, Error => {
        console.log(Error);
      })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  onButtonClick() {
    this.navCtrl.push(TabsPage);
  }


  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'ACESSO NEGADO',
      subTitle: 'Usuário ou Senha Inválidos',
      cssClass: 'teste',
    });

    actionSheet.present();
  }




}
