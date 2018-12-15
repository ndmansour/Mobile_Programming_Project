import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { restaurant_details } from '../../app/models/restaurants_details';
import { App, MenuController } from 'ionic-angular'

@IonicPage()
@Component({
  selector: 'page-restaurants',
  templateUrl: 'restaurants.html',
  
})
export class RestaurantsPage {
  items: restaurant_details[]; 
  constructor(public navCtrl: NavController, public navParams: NavParams, public geo : Geolocation,
    menu: MenuController) {
      menu.enable(true);
    this.initializeItems();
  }

    initializeItems() {
      this.items = [
       { name: "Bagel Corner", location: "66 Avenue des Gobelins",code_postal: 75013 ,city: "Paris" , phone: "01 43 37 29 22", url_img: "../assets/imgs/bagel_corner.jpg"},
       { name: "Bagelstein", location: "101 Avenue de France",code_postal: 75013 ,city: "Paris", phone: "01 71 28 78 08", url_img: "../assets/imgs/bagelstein.png" },
       { name: "Ben&Jerry's", location: "66 Avenue des Gobelins",code_postal: 75013 ,city: "Paris" , phone : "01 43 37 29 22", url_img : "../assets/imgs/ben&jerrys.jpg" }, 
       { name: 'Big Fernand', location: "8 Promenade Claude Lévi-Strauss" ,code_postal: 75013 ,city: "Paris", phone : "01 57 27 09 08", url_img : "../assets/imgs/big_fernand.jpg" },
       { name: 'Buffalo Grill', location: "2 Rue Raymond Aron" ,code_postal: 75013 ,city: "Paris" , phone : "01 45 86 76 71", url_img : "../assets/imgs/buffalo_grill.jpg" },
       { name: 'Burger King', location: "79-81 Quai de la Gare",code_postal: 75013 ,city: "Paris" , phone : "01 45 83 08 02", url_img : "../assets/imgs/bk.jpg" },
       { name: "Domino's Pizza", location: "201 Rue de Tolbiac",code_postal: 75013 ,city: "Paris" , phone : "01 53 62 09 09", url_img : "../assets/imgs/dominos.png" },
       { name: 'Fête à crêpe', location: "32 Rue Mirabeau",code_postal: 94200 ,city: "Ivry Sur Seine" , phone : "No phone number, walk up there !", url_img : "../assets/imgs/fête_a_crêpe.jpg" },
       { name: 'Five Guys', location: "42 Cour Saint Emillion",code_postal: 75012 ,city: "Paris" , phone : "01 43 44 46 51", url_img : "../assets/imgs/five_guys.jpg" },
       { name: 'KFC', location: "211-213 Boulevard Vincent Auriol",code_postal: 75013 ,city: "Paris" , phone : "01 45 83 54 36", url_img : "../assets/imgs/KFC.jpg" },
       { name: 'Le Bistrot Burger', location: "51 Boulevard Paul Vaillant Couturier",code_postal: 94200 ,city: "Ivry Sur Seine" , phone : "09 86 41 31 30", url_img : "../assets/imgs/le-bistrot-burger.jpg" },
       { name: "Mac Donald's", location: "30 Boulevard Paul Vaillant Couturier", code_postal: 94200 ,city: "Ivry Sur Seine" , phone : "01 49 60 62 66", url_img : "../assets/imgs/macdo.jpg" },
       { name: 'Pizza Hut', location: "81 Avenue de Verdun", code_postal: 94200 ,city: "Ivry Sur Seine" , phone : "01 46 71 50 50", url_img : "../assets/imgs/pizzahut.jpg" },
       { name: 'Starbucks', location: "5 Rue Francois Mitterand", code_postal: 94200 ,city: "Ivry Sur Seine" , phone : "No phone number !", url_img : "../assets/imgs/starbucks.jpg" }
      ];
    }

    getItems(ev) {
      //Reset items back to all of the items.
      this.initializeItems();
      //this.initializeNumbers();

      //Set val to the value of the ev target.
      var val = ev.target.value;

      // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RestaurantsPage');
    /*this.geo.getCurrentPosition().then(pos => {
      this.lat = pos.coords.latitude;
      this.lng = pos.coords.longitude;
    }).catch(err => console.log(err));*/
  }

  logOut() {
    this.navCtrl.popTo("LoginPage");
  }
}
