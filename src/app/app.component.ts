import { Component, ViewChild, NgModule } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NavController, NavParams } from 'ionic-angular';

import { FenetersPage } from '../pages/feneters/feneters';
import { platformBrowser } from '@angular/platform-browser';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

@ViewChild(Nav) nav: Nav;
  rootPage = FenetersPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  logOut() {
    //this.nav.push("ProfilePage");
    //this.nav.popAll;
    //this.nav.goToRoot;
  }

  openPage() {
    this.nav.push("CommandesPage");
  }
 }

