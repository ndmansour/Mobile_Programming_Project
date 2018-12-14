import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../app/models/user';

import { AngularFireAuth } from 'angularfire2/auth';
import { AlertController } from 'ionic-angular';
import { delay } from 'rxjs/operators';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  user = {} as User;

  constructor(private afAuth: AngularFireAuth,
    public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  async register (user: User) {
    try {
  //const result = await this.afuth.auth.createUserWithFirstNameLastNameEmailAndPassword(user.first_name, user.last_name, user.email, user.password);
  const result = await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
  console.log(result);
  if(result) {
    //this.showAlertMsg("Registered successfully !");
    //delay(1000);
    this.showAlertMsg("Registered successfully !");
    this.navCtrl.setRoot("ProfilePage");
    //this.navCtrl.popTo("LoginPage");
  } else {

  }
  /*this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password).then(
    data => {
    console.log('got some data', data);
    this.showAlertMsg("Registered successfully !");
  })
  .catch(error => {
    console.log('got an error', error);
    this.showAlertMsg(error.message);
  })*/
    }
     catch (e) {
       console.error(e);
       this.showAlertMsg(e.message);
       this.navCtrl.push
     } 
 }

 showAlertMsg(msg: string) {
  const alert = this.alertCtrl.create({
    title: " Info ",
    subTitle: msg,
    buttons: ['Ok']
  });
 alert.present();
}
}
