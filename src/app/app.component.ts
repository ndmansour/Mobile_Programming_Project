import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { FenetersPage } from '../pages/feneters/feneters';
import { platformBrowser } from '@angular/platform-browser';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = FenetersPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

 }

