import {NavController, Platform, AlertController, ToastController} from 'ionic-angular';
import {Component} from '@angular/core';
import {UserDetailsPage} from '../user-details/user-details';

import {User} from '../../models/user';

import {GitProvider} from '../../providers/gitprovider';
import {LocalNotifications} from "@ionic-native/local-notifications";


@Component({
    selector: 'page-users',
    templateUrl: 'users.html'
})
export class UsersPage {
    users: User[];

    constructor(public navCtrl: NavController,
                private platform: Platform,
                private githubUsers: GitProvider,
                private localNotifications: LocalNotifications,
                private alertCtrl: AlertController,
                private toastCtrl: ToastController) {
        githubUsers.load().subscribe(users => {
            this.users = users;
        });

        this.platform.ready().then(() => {
            this.localNotifications.hasPermission().then((missing) => {
                if (missing) { this.localNotifications.registerPermission(); }
            });

            this.localNotifications.on('click', () => {
                let alert = alertCtrl.create({
                    title: 'Flottur!',
                    subTitle: 'Gerðu eitthvað nett.',
                    buttons: ['OK']
                });
                alert.present();
            })
        });
    }

    scheduleNotification() {
        let d = new Date();
        let year = d.getFullYear();
        let month = d.getMonth();
        let day = d.getDate();
        let notificationID = 1;

        let notification = {
            id: notificationID,
            title: 'ionicGithub',
            text: 'Hey, farðu heim.',
            at: new Date(year, month, day, 16, 0, 0),
            every: 'day',
            priority: 1,
            led: '9900DD'
        };

        this.localNotifications.isScheduled(notificationID).then((active) => {
            if (active) {
                this.presentToast('Notification has already been scheduled @'
                    + new Date(notification.at).toString().slice(0, 24));
            } else {
                this.localNotifications.schedule(notification);
                this.presentToast('Notification set everyday @16:00:00');
            }
        });
    }

    clearNotifications() {
        this.localNotifications.cancelAll().then((() => {
            this.localNotifications.getAllIds().then((ids) => {
                if (ids.length < 1) { this.presentToast('Clear status: OK'); }
                else { this.presentToast('Clear status: ERROR'); }
            });
        }));
    }

    presentToast(message: string) {
        this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'bottom'
        }).present();
    }

    goToDetails(login: string) {
        this.navCtrl.push(UserDetailsPage, {login});
    }

    search(searchEvent) {
        let term = searchEvent.target.value;
        if (term.trim() !== '' && term.trim().length > 2) {
            this.githubUsers.searchUsers(term).subscribe(users => {
                this.users = users
            });
        }
    }
}