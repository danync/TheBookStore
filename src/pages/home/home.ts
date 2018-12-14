import { Component } from '@angular/core';
import {AlertController, NavController} from 'ionic-angular';
import {RegistroPage} from "../registro/registro";
import {Storage} from "@ionic/storage";
import { PrincipalPage } from '../principal/principal';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  correo = '';
  contra = '';

  registro = RegistroPage;
  prin = PrincipalPage;

  usuarios = [];

  

  constructor(public navCtrl: NavController, public alert: AlertController, public storage: Storage) {
    this.storage.keys()
      .then(keys => {
        if (keys.some(k => k == 'usuarios')) {
          this.storage.get('usuarios')
            .then(usuarios => {
              this.usuarios = JSON.parse(usuarios);
            });
        }
      });
      //this.storage.clear();
  }

  Registro(){
    this.navCtrl.push(this.registro, {usuarios: this.usuarios});
  }

  Sesion() {
    console.log(this.correo);
    console.log(this.contra);

    let index = this.usuarios.findIndex(u => u.correo == this.correo && u.contra == this.contra);

    if (index >= 0) {
      const alerta = this.alert.create({
        title: "App",
        subTitle: "Inicio de Sesión Válido",
        buttons: ['Ok']
      });
      alerta.present();

      this.navCtrl.push(this.prin);
    }
    else {
      const alerta = this.alert.create({
        title: "App",
        subTitle: "Inicio de Sesión No Válido",
        buttons: ['Ok']
      });
      alerta.present();
    }

  }
}
