import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/user';
import { GitProvider } from "../../providers/gitprovider";
import { ReposPage } from '../repos/repos'


/**
 * Generated class for the UserDetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-user-details',
  templateUrl: 'user-details.html',
})
export class UserDetailsPage {
  user: User;
  login: string;

  constructor(public navCtrl: NavController, private navParams: NavParams, private gitProvider: GitProvider) {
    this.login = navParams.get('login');
    gitProvider.loadDetails(this.login).subscribe(user => {
      this.user = user;
      console.log(this.user);
    })
  }

  goToRepos(login: string) {
    this.navCtrl.push(ReposPage, {login});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserDetailsPage');
  }

}