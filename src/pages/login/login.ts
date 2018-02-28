import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  data:any = {};

  constructor(public navCtrl: NavController, public http: Http) {
    this.data.telephone = '';
    this.data.motdepasse = '';
    this.data.response = '';

    this.http = http;
  }

  submit() {
    var link = 'http://localhost/kuria/login.php';
    var myData = JSON.stringify({telephone: this.data.telephone,motdepasse : this.data.motdepasse});


    this.http.post(link, myData)
        .subscribe(data => {
          this.data.response = data["_body"];
        }, error => {
          console.log("Oooops!");
        });
  }


}
