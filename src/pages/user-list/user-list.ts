import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {User} from "../../models/user";
import {UserDetailsPage} from "../user-details/user-details";
import {GitProvider} from "../../providers/gitprovider";

@IonicPage()
@Component({
  selector: 'page-user-list',
  templateUrl: 'user-list.html',
})
export class UserListPage {
  login: string;
  users: User[];
  type: string;
  viewTitle: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private githubUsers: GitProvider) {
    this.login = navParams.get('login');
    this.users = navParams.get('users');
    this.type = navParams.get('type');
    this.viewTitle = `${this.login} ${this.type}`;
    if (this.type === 'followers') this.viewTitle = `${this.login}'s ${this.type}`;
  }

  goToDetails(login: string) {
    this.navCtrl.push(UserDetailsPage, {login});
  }
}