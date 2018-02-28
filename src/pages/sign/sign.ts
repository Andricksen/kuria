import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Http} from "@angular/http";

@Component({
  selector: 'page-sign',
  templateUrl: 'sign.html'
})
export class SignPage {

  data:any = {};

  constructor(public navCtrl: NavController, public http: Http) {
    this.data.nom='';

    this.data.telephone = '';
    this.data.motdepasse = '';
    this.data.cmotdepasse='';
    this.data.response = '';

    this.http = http;
  }

  submit() {
    var link = 'http://localhost/kuria/sign.php';
    var myData = JSON.stringify({nom: this.data.nom,telephone: this.data.telephone,motdepasse : this.data.motdepasse,cmotdepasse: this.data.cmotdepasse});


    this.http.post(link, myData)
        .subscribe(data => {
          this.data.response = data["_body"]; //https://stackoverflow.com/questions/39574305/property-body-does-not-exist-on-type-response
        }, error => {
          console.log("Oooops!");
        });
  }


}
