import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { SignPage } from '../sign/sign';
import { WelcomePage } from '../welcome/welcome';

@Component({
  selector: 'page-add_plat',
  templateUrl: 'add_plat.html'
})
export class AddPlatPage {

  constructor(public navCtrl: NavController,public alertCtrl: AlertController) {

  }


  private add_new_ingredient() {
    let prompt = this.alertCtrl.create({
      title: 'Ajouter ingredients',
      message: "Taper le nom de l'ingredient",
      inputs: [
        {
          name: 'Nom ingredient',
          placeholder: 'ingredient'
        },
      ],
      buttons: [
        {
          text: 'Annuler',
          handler: data => {
            console.log('annulation confirmer');
          }
        },
        {
          text: 'Ajouter',
          handler: data => {
            console.log('sauvegarde effectuer');
          }
        }
      ]
    });
    prompt.present();
  }


}
