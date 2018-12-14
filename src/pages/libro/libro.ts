import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ResenaPage } from '../resena/resena';

/**
 * Generated class for the LibroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-libro',
  templateUrl: 'libro.html',
})
export class LibroPage {

  producto = '';
  carrito = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.producto = this.navParams.get('libro');
    this.carrito = this.navParams.get('carrito');
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LibroPage');
  }

  agregar(){
    this.carrito.push(
      this.producto
    );
    this.navCtrl.pop();
  }


}
