import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { Profile } from '../../app/models/profile';
import { AngularFireDatabase } from 'angularfire2/database';
//import { AngularFireAuth } from 'angularfire2/auth';


@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  profile = {} as Profile;

  constructor(private afAuth: AngularFireAuth, private toast: ToastController, 
    private afDatabase: AngularFireDatabase, 
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.afAuth.authState.subscribe(data => {
      if (data.email && data.uid) {
      this.toast.create({
        message: `Welcome to your account, ${data.email}`,
        duration: 3000
      }).present();
    } else {
      this.toast.create({
        message: `Could not find authentification details`,
        duration: 3000
      }).present();
    }
    })
    //console.log('ionViewDidLoad ProfilePage');
  }

  createProfile() {
    this.afAuth.authState.take(1).subscribe(auth => {
      this.afDatabase.list(`profile/${auth.uid}`).push(this.profile)
      .then(() => this.navCtrl.push('RestaurantsPage'));
    })
  }
}