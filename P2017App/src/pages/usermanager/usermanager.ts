import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-user-manager',
  templateUrl: 'usermanager.html'
})
export class UserManagerPage {
  userForm = {
    userName: '',
    userLastName: '',
    userSecondLastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    birthDate: ''

  }
  constructor(public navCtrl: NavController) {

  }
  createUser(){
    console.log(this.userForm);
  }

}
