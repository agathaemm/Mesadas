import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MyStorage } from '../../providers/my-storage';

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public login : {email? : string, password? : string} = {};
  public submitted:boolean = false;
 
  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: MyStorage) {}

  onLogin(form) {
    this.submitted = true;

    if(form.valid) {
      
    }
  }

}
