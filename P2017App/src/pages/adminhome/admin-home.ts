import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-admin-home',
  templateUrl: 'admin-home.html'
})
export class AdminHomePage {

  constructor(public navCtrl: NavController) {
    console.log("Creating admin home");
  }
}
