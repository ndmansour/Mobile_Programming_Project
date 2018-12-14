import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the PlusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-plus',
  templateUrl: 'plus.html',
})
export class PlusPage {

  constructor(private afAuth: AngularFireAuth,
    public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
  this.afAuth.authState.subscribe(data => {
    if(data && data.email && data.uid) {
      //this.showAlert("Welcome to the account of " + data.email);
    } else {
      this.showAlert();
    }
  });
  }

  showAlert() {
    const alert = this.alertCtrl.create({
      title: "Couldn't log In",
      subTitle: 'Please enter good informations !',
      buttons: ['Ok'] });
    alert.present();
  }

}
