import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { UsersPage } from '../pages/users/users';
import { ReposPage } from '../pages/repos/repos';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Deploy } from '@ionic/cloud-angular';
import { MobileAccessibility } from '@ionic-native/mobile-accessibility'


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
    private mobileAccessibility: MobileAccessibility
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
      this.mobileAccessibility.usePreferredTextZoom(false);
      console.log(this.mobileAccessibility.getTextZoomCallback());
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
