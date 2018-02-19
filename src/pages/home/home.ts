import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { SignPage } from '../sign/sign';
import { WelcomePage } from '../welcome/welcome';
import { DetailsPlatPage } from '../details_plat/details_plat';
import {AddPlatPage} from "../add_plat/add_plat";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  private go_to_login()
  {
      this.navCtrl.push(LoginPage);
  }
  private go_to_sign()
  {
      this.navCtrl.push(SignPage);
  }
  private go_to_actu()
  {
      this.navCtrl.push(WelcomePage);
  }
  private go_to_details()
  {
      this.navCtrl.push(DetailsPlatPage);
  }
  private go_to_add_plat()
  {
      this.navCtrl.push(AddPlatPage);
  }

}
