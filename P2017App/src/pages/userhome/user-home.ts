import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-user-home',
  templateUrl: 'user-home.html'
})
export class UserHomePage {

  constructor(public navCtrl: NavController) {
    console.log("Creating user home");
  }
}
