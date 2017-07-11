import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav, ToastController } from 'ionic-angular';

import { UsersPage } from '../pages/users/users';
import { ReposPage } from '../pages/repos/repos';

import { Deploy } from '@ionic/cloud-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MobileAccessibility } from '@ionic-native/mobile-accessibility';


@Component({
  templateUrl: 'app.html'
})
export class IonicGithub {
  @ViewChild(Nav) nav: Nav;

  rootPage = UsersPage;
  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public deploy: Deploy,
    private mobileAccessibility: MobileAccessibility,
    private toastCtrl: ToastController
  ) {
    this.initializeApp();

    this.pages = [
      { title: 'Users', component: UsersPage },
      { title: 'Repositories', component: ReposPage }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.mobileAccessibility.setTextZoom(85.7);
    });
  }

  presentToast(message: string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 8000,
      position: 'bottom'
    });

    toast.present();
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
