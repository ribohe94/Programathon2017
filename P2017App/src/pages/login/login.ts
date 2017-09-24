import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AdminHomePage } from '../adminhome/admin-home';
import { AuthService } from '../../providers/auth-service/auth-service';
//import { UserHomePage } from '../userhome/user-home';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  responseData: any;
  user={
    email: '',
    password: ''
  };
  constructor(public navCtrl: NavController, public authService: AuthService) {
    console.log("Creating login");
  }

  login(){
    //send information to the API
    /*console.log(this.user);
    this.authService.postData(this.user,"authenticate/"+'?email='+this.user.email+'&password='+this.user.password).then((result) => {
      debugger;
      this.responseData = result;
      console.log(this.responseData);
      localStorage.setItem('userData',JSON.stringify(this.responseData));*/
      //if(admin)
      this.navCtrl.push(AdminHomePage)
      //else
      //this.navCtrl.push(UserHomePage);
  /*  }, (err) => {
      console.error(err);
    });*/

  }

}
