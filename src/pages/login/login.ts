import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../app/models/user';
import { RegisterPage } from '../register/register';
import { AngularFireAuth } from 'angularfire2/auth';
import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {} as User; 

  constructor(private afAuth: AngularFireAuth,
    public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

 async login(user: User) {
   try {
  const result = this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password); 
  console.log(result);
  this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password).then(
    data => {
      console.log('got some data', this.afAuth.auth.currentUser);
      this.showAlertMsg("Success ! You're logged in.");
    }
  )
  .catch(error => {
    console.log('got an error', error);
    this.showAlertMsg(error.message);
  })

  this.navCtrl.push('ProfilePage');
  //this.navCtrl.push('RestaurantsPage');
    /*if (result) {
      this.navCtrl.push('PlusPage');
    } else {
      console.log("Please enter good ids");
      //this.showAlert();
    }*/
   }
   catch (e) {  
     console.log('got an error', e);
     this.showAlertWhenFillIsEmpty();
   }
 }

 register() {
   this.navCtrl.push('RegisterPage');
 }

 showAlertWhenFillIsEmpty() {
   const alert = this.alertCtrl.create({
     title: "Couldn't log In",
     subTitle: "Make sure you've filled in your email and password.",
     buttons: ['Ok'] });
   alert.present();
 }

 showAlertMsg(msg: string) {
    const alert = this.alertCtrl.create({
      title: "Info",
      subTitle: msg,
      buttons: ['Ok']
    });
   alert.present();
 }
}