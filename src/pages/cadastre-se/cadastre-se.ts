import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IUser } from '../../interfaces/user.interface';
import { MyStorage } from '../../providers/my-storage';

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
  public errorPass:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: MyStorage) {
  }

  onRegister(form){
    this.submitted = true;

    // Validacao de senha
    if(this.user.password != this.user.confirmPassword)
      this.errorPass = "As senhas não coincidem";
    else if(form.valid) {
      // Salva o registro no localStorage
      this.storage.setUsers(this.user);
    }
  }

}
