import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the CarritoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-carrito',
  templateUrl: 'carrito.html',
})
export class CarritoPage {

  product = '';
  carrito = [];
  tarjeta = '';

  constructor(public navCtrl: NavController, public alert: AlertController, public navParams: NavParams) {
  this.product = this.navParams.get('libro');
  this.carrito = this.navParams.get('carrito');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CarritoPage');
  }

  pagar(){
    if (this.tarjeta.length >= 6) {
      const alerta = this.alert.create({
        title: "Pago",
        subTitle: "¡Tu compra ha sido éxitosa!",
        buttons: ['Ok'],
      });
      alerta.present();
      this.navCtrl.pop();
    }
    else {
      const alerta = this.alert.create({
        title: "Pago",
        subTitle: "Número inválido.",
        buttons: ['Ok']
      });
      alerta.present();
    }
  }

}
