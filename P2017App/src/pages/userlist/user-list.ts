import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-user-list',
  templateUrl: 'user-list.html'
})
export class UserListPage {

  constructor(public navCtrl: NavController) {
    console.log("Creating user list");
  }
}
