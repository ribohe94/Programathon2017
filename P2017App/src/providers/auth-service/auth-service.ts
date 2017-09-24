import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
let apiUrl = "http://democra-tico.com/api/";
@Injectable()
export class AuthService {

  constructor(public http: Http) {
    console.log('Hello AuthServiceProvider Provider');
  }

  postData(credentials, type){
    return new Promise((resolve,reject) => {
      let headers = new Headers();
      //headers.append('Access-Control-Allow-Origin', '*');

      this.http.get(apiUrl + type, {headers: headers}).subscribe(res => {
        console.log("Authenticated",res)
        resolve(res.json());
      }),
      (err) => {
        console.log("PHAIL",err)
        reject(err);
      };
    });

  }

}
