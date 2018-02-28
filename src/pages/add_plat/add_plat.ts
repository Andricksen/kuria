import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { SignPage } from '../sign/sign';
import { WelcomePage } from '../welcome/welcome';
import {Http} from "@angular/http";
import {AddImgPage} from "../add_img/add_img";

@Component({
  selector: 'page-add_plat',
  templateUrl: 'add_plat.html'
})
export class AddPlatPage {
  data:any = {};

  constructor(public navCtrl: NavController, public http: Http) {
    this.data.nom_plat='';

    this.data.description_plat = '';
    this.data.ingredient = '';
    this.data.explications='';
    this.data.response = '';

    this.http = http;
  }

  private new_plat() {
    var link = 'http://127.0.0.1/kuria/add_plat.php';
    var myData = JSON.stringify({nom_plat: this.data.nom_plat,description_plat: this.data.description_plat,ingredient : this.data.ingredient,explications: this.data.explications});


    this.http.post(link, myData)
        .subscribe(data => {

          if(data["_body"] == "success") {
            this.navCtrl.push(AddImgPage);
          }
          else
          {
            this.data.response = data["_body"];
          }


        }, error => {
          console.log("Oooops!");
        });
  }






}
