import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

@IonicPage()
@Component({
  selector: 'page-restaurants',
  templateUrl: 'restaurants.html',
})
export class RestaurantsPage {
  lat : any;
  lng : any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public geo : Geolocation) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RestaurantsPage');
    this.geo.getCurrentPosition().then(pos => {
      this.lat = pos.coords.latitude;
      this.lng = pos.coords.longitude;
    }).catch(err => console.log(err));
  }
}
