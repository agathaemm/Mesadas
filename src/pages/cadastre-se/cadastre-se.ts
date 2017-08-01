import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IUser } from '../../interfaces/user.interface';

/**
 * Generated class for the CadastreSePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastre-se',
  templateUrl: 'cadastre-se.html',
})
export class CadastreSePage {

  public user:IUser = <IUser>{};
  public submitted:boolean = false; // Controle de envio

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  onRegister(form){
    this.submitted = true;
    console.log(this.user);
  }

}
