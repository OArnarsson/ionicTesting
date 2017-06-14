import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController  } from 'ionic-angular';
import { User } from '../../models/user';

/**
 * Generated class for the UserContactModalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-user-contact-modal',
  templateUrl: 'user-contact-modal.html',
})
export class UserContactModalPage {
  user: User;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.user = this.navParams.data;
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad UserContactModalPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
