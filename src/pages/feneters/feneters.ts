import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestaurantsPage } from '../restaurants/restaurants';
import { CommandesPage } from '../commandes/commandes';
import { LoginPage } from '../login/login';
//import { RegisterPage} from '../register/register';

@IonicPage()
@Component({
  selector: 'page-feneters',
  templateUrl: 'feneters.html',
})
export class FenetersPage {

 restaurantsPage =  RestaurantsPage;
 //commandesPage = CommandesPage;
 loginPage = LoginPage;
 //registerPage = RegisterPage;
}
