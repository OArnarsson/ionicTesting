import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpModule} from '@angular/http';
import { IonicGithub } from './app.component';

import { UsersPage } from '../pages/users/users';
import { ReposPage } from '../pages/repos/repos';

import { CloudSettings, CloudModule } from '@ionic/cloud-angular';
import { MobileAccessibility } from '@ionic-native/mobile-accessibility'
import { LocalNotifications } from '@ionic-native/local-notifications';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GitProvider } from '../providers/gitprovider';
import { UserDetailsPage } from "../pages/user-details/user-details";
import { UserContactModalPage } from "../pages/user-contact-modal/user-contact-modal";
import { UserListPage } from "../pages/user-list/user-list";

import { OverHundredPipe } from '../pipes/overHundred/overHundred';
import { RepoTypePipe } from '../pipes/repoType/repoType';
import { LimitToPipe } from '../pipes/limitTo/limitTo';
import { TimeAgoPipe } from 'time-ago-pipe';
import { FeedTypePipe } from '../pipes/feedType/feedType';
import { FeedActionPipe } from '../pipes/feedAction/feedAction';

const cloudSettings: CloudSettings = {
  'core': {
    'app_id': 'adc0f7fe'
  }
};

@NgModule({
  declarations: [
    IonicGithub,
    UsersPage,
    ReposPage,
    UserDetailsPage,
    UserContactModalPage,
    UserListPage,
    OverHundredPipe,
    RepoTypePipe,
    LimitToPipe,
    TimeAgoPipe,
    FeedTypePipe,
    FeedActionPipe,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(IonicGithub),
    CloudModule.forRoot(cloudSettings),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    IonicGithub,
    UsersPage,
    ReposPage,
    UserDetailsPage,
    UserContactModalPage,
    UserListPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GitProvider,
    MobileAccessibility,
    LocalNotifications,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
