
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FenetersPage } from './feneters';
import { RestaurantsPage } from '../restaurants/restaurants';
import { CommandesPage } from '../commandes/commandes';
import { LoginPage } from '../login/login';
//import { RegisterPage } from '../register/register';


@NgModule({
  declarations: [
    FenetersPage,
  ],
  imports: [
    IonicPageModule.forChild(FenetersPage),
    CommonModule,
    FormsModule,
    RestaurantsPage,
    //CommandesPage,
    LoginPage,
    //RegisterPage
  ],
})
export class FenetersPageModule {}
