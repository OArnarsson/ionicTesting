import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserContactModalPage } from './user-contact-modal';

@NgModule({
  declarations: [
    UserContactModalPage,
  ],
  imports: [
    IonicPageModule.forChild(UserContactModalPage),
  ],
  exports: [
    UserContactModalPage
  ]
})
export class UserContactModalPageModule {}
