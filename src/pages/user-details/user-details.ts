import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { User } from '../../models/user';
import { GitProvider } from "../../providers/gitprovider";
import { ReposPage } from '../repos/repos'
import { UserContactModalPage} from '../user-contact-modal/user-contact-modal'
import {UserListPage} from "../user-list/user-list";


@IonicPage()
@Component({
  selector: 'page-user-details',
  templateUrl: 'user-details.html',
})
export class UserDetailsPage {
  login: string;
  user: User;

  constructor(public navCtrl: NavController, private navParams: NavParams, private gitProvider: GitProvider, public modalCtrl: ModalController) {
    this.login = navParams.get('login');
      gitProvider.loadDetails(this.login).subscribe(user => {
      this.user = user
    });
  }

  goToRepos(login: string) {
    this.navCtrl.push(ReposPage, {login});
  }

  openInfoModal() {
    let contactInfoModal = this.modalCtrl.create(UserContactModalPage, this.user);
    contactInfoModal.present();
  }

  goToFollowers() {
    this.gitProvider.loadFollowers(this.login).subscribe(followers => {
      this.navCtrl.push(UserListPage, {'users': followers, 'login': this.login, 'type': "followers"});
    });
  }

  goToFollowing() {
    this.gitProvider.loadFollowing(this.login).subscribe(following => {
      this.navCtrl.push(UserListPage, {'users': following, 'login': this.login, 'type': "follows"});
    });
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad UserDetailsPage');
  }

}
