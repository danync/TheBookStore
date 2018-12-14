import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LibroPage } from '../libro/libro';
import { CarritoPage } from '../carrito/carrito';

/**
 * Generated class for the PrincipalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html',
})
export class PrincipalPage {

  book = LibroPage;
  car = CarritoPage;
  carrito = [];

  libros = [
    {id:0,
      titulo: "La Selección",
      autor: "Kiera Cass",
      editorial: "HarperCollins",
      valoracion: [1, 2, 3, 4],
      lanzamiento: '2012',
      resenas:{
        perfil: "../assets/stiles.png",
        nombre: "theprincess",
        resena: "A really good book, with a great plot. I love how America is different from the other candidates."
      },
      imagen: "../assets/laseleccion.jpg",
      disponibles: '24 ejemplares restantes.',
      precio: '$229.09',
      paginas: '336 páginas'
    },
    {id:1,
      titulo: "La Élite",
      autor: "Kiera Cass",
      editorial: "HarperCollins",
      valoracion: [1, 2, 3, 4],
      lanzamiento: '2013',
      resenas:{
        perfil: "../assets/lydia.jpg",
        nombre: "amxrica",
        resena: "The relationship between Maxon and America is the best. I hate Aspen."
      },
      imagen: "../assets/elite.jpg",
      disponibles: '20 ejemplares restantes.',
      precio: '$259.00',
      paginas: '336 páginas'
    },
    {id:2,
      titulo: "La Elegida",
      autor: "Kiera Cass",
      editorial: "HarperCollins",
      valoracion: [1, 2, 3, 4],
      lanzamiento: '2014',
      resenas:{
        perfil: "../assets/jb.jpg",
        nombre: "thechosenone",
        resena: "We all knew America was going to be the one, but it is still exciting!"
      },
      imagen: "../assets/elegida.jpg",
      disponibles: '25 ejemplares restantes.',
      precio: '$259.00',
      paginas: '323 páginas'
    },
    {id:3,
      titulo: "Los 100",
      autor: "Kass Morgan",
      editorial: "Little, Brown and Company",
      valoracion: [1, 2, 3, 4],
      lanzamiento: '2013',
      resenas:{
        perfil: "../assets/bellamy.jpg",
        nombre: "blake",
        resena: "I'd love that Bellamy and Clarke were in a relationship."
      },
      imagen: "../assets/the100.jpg",
      disponibles: '16 ejemplares restantes.',
      precio: '$279.00',
      paginas: '323 páginas'
    },
    {id:4,
      titulo: "Los Juegos del Hambre",
      autor: "Suzanne Collins",
      editorial: "Scholastic Corporation",
      valoracion: [1, 2, 3, 4, 5],
      lanzamiento: '2008',
      resenas:{
        perfil: "../assets/malia.png",
        nombre: "tribut13",
        resena: "Can't wait to read Catching Fire!!"
      },
      imagen: "../assets/thg.jpg",
      disponibles: '34 ejemplares restantes.',
      precio: '$295.00',
      paginas: '374 páginas'
    },
    {id:5,
      titulo: "En Llamas",
      autor: "Suzanne Collins",
      editorial: "Scholastic Corporation",
      valoracion: [1, 2, 3, 4, 5],
      lanzamiento: '2009',
      resenas:{
        perfil: "../assets/clarke.jpg",
        nombre: "girlonfire",
        resena: "It is my favorite from the series so far."
      },
      imagen: "../assets/cf.jpg",
      disponibles: '28 ejemplares restantes.',
      precio: '$295.00',
      paginas: '391 páginas'
    },
    {id:6,
      titulo: "Sinsajo",
      autor: "Suzanne Collins",
      editorial: "Scholastic Corporation",
      valoracion: [1, 2, 3, 4, 5],
      lanzamiento: '2010',
      resenas:{
        perfil: "../assets/scott.jpg",
        nombre: "mockingjay",
        resena: "I hate the fact that Finnick died, but it is a really great book."
      },
      imagen: "../assets/m.jpg",
      disponibles: '35 ejemplares restantes.',
      precio: '$295.00',
      paginas: '392 páginas'
    },
    {id:7,
      titulo: "Crazy Rich Asians",
      autor: "Kevin Kwan",
      editorial: "Doubleday",
      valoracion: [1, 2, 3, 4],
      lanzamiento: '2013',
      resenas:{
        perfil: "../assets/jiwoo.png",
        nombre: "thecrxzyrich",
        resena: "It is so fun and entertaining to read!"
      },
      imagen: "../assets/cra.jpg",
      disponibles: '25 ejemplares restantes.',
      precio: '$247.00',
      paginas: '403 páginas'
    },
    {id:8,
      titulo: "To All The Boys I've Loved Before",
      autor: "Jenny Han",
      editorial: "Simon & Schuster",
      valoracion: [1, 2, 3, 4],
      lanzamiento: '2014',
      resenas:{
        perfil: "../assets/peter.png",
        nombre: "kavinskyx",
        resena: "I just can't help falling in love with the characters!"
      },
      imagen: "../assets/tatbilb.jpg",
      disponibles: '23 ejemplares restantes.',
      precio: '$279.00',
      paginas: '355 páginas'
    },
    {id:9,
      titulo: "Orgullo y Prejuicio",
      autor: "Jane Austen",
      editorial: "Modern Library",
      valoracion: [1, 2, 3, 4, 5],
      lanzamiento: '1813',
      resenas:{
        perfil: "../assets/jungkook.jpg",
        nombre: "darcy1800",
        resena: "MISTER DARCY!! I wish I was born in that century."
      },
      imagen: "../assets/oyp.jpg",
      disponibles: '42 ejemplares restantes.',
      precio: '$102.00',
      paginas: '279 páginas'
    },
    {id:10,
      titulo: "Hush Hush",
      autor: "Becca Fitzpatrick",
      editorial: "Simon & Schuster",
      valoracion: [1, 2, 3, 4],
      lanzamiento: '2009',
      resenas:{
        perfil: "../assets/fotoquali.jpg",
        nombre: "pxtchcipriano",
        resena: "I really want a fallen angel like Patch in my life."
      },
      imagen: "../assets/hh.jpg",
      disponibles: '27 ejemplares restantes.',
      precio: '$242.00',
      paginas: '391 páginas'
    },
    {id:11,
      titulo: "Crescendo",
      autor: "Becca Fitzpatrick",
      editorial: "Simon & Schuster",
      valoracion: [1, 2, 3, 4],
      lanzamiento: '2010',
      resenas:{
        perfil: "../assets/jinyoung.jpg",
        nombre: "thefallen",
        resena: "I hated Patch soooo much!! He is an asshole."
      },
      imagen: "../assets/cres.jpg",
      disponibles: '22 ejemplares restantes.',
      precio: '$242.00',
      paginas: '432 páginas'
    },
    {id:12,
      titulo: "Silencio",
      autor: "Becca Fitzpatrick",
      editorial: "Simon & Schuster",
      valoracion: [1, 2, 3, 4],
      lanzamiento: '2011',
      resenas:{
        perfil: "../assets/fotohwa.jpg",
        nombre: "silenced",
        resena: "I'm glad that Becca decided to bring Patch to his senses."
      },
      imagen: "../assets/silencio.jpg",
      disponibles: '26 ejemplares restantes.',
      precio: '$242.00',
      paginas: '448 páginas'
    },
    {id:13,
      titulo: "Finale",
      autor: "Becca Fitzpatrick",
      editorial: "Simon & Schuster",
      valoracion: [1, 2, 3, 4],
      lanzamiento: '2012',
      resenas:{
        perfil: "../assets/perfilchanyeol.jpg",
        nombre: "whiteangel",
        resena: "The end was such a plot twist! Wasn't expecting that."
      },
      imagen: "../assets/final.jpg",
      disponibles: '30 ejemplares restantes.',
      precio: '$242.00',
      paginas: '464 páginas'
    },
    {id:14,
      titulo: "Maravilloso Desastre",
      autor: "Jamie McGuire",
      editorial: "Sin editorial",
      valoracion: [1, 2, 3, 4],
      lanzamiento: '2011',
      resenas:{
        perfil: "../assets/perfilpresent.jpg",
        nombre: "maddox99",
        resena: "It is a cliché, but a good one."
      },
      imagen: "../assets/md.jpg",
      disponibles: '13 ejemplares restantes.',
      precio: '$264.00',
      paginas: '319 páginas'
    },
    {id:15,
      titulo: "La Cabaña",
      autor: "Wm. Paul Young",
      editorial: "Hodder & Stoughton",
      valoracion: [1, 2, 3, 4],
      lanzamiento: '2007',
      resenas:{
        perfil: "../assets/fotonazi.jpg",
        nombre: "theshack",
        resena: "It really made me think a lot. Hard to read, but enjoyable and worth the time."
      },
      imagen: "../assets/lc.jpg",
      disponibles: '28 ejemplares restantes.',
      precio: '$138.00',
      paginas: '256 páginas'
    },
    {id:16,
      titulo: "Oscuros",
      autor: "Lauren Kate",
      editorial: "Penguin Random House",
      valoracion: [1, 2, 3, 4],
      lanzamiento: '2009',
      resenas:{
        perfil: "../assets/fotoha.jfif",
        nombre: "camxgrigori",
        resena: "It has a weird plot, but I like it. I'll buy the next books."
      },
      imagen: "../assets/oscuros.jpg",
      disponibles: '13 ejemplares restantes.',
      precio: '$263.00',
      paginas: '452 páginas'
    },
    {id:17,
      titulo: "La Reina Roja",
      autor: "Victoria Aveyard",
      editorial: "HarperCollins",
      valoracion: [1, 2, 3, 4],
      lanzamiento: '2015',
      resenas:{
        perfil: "../assets/fotochuup.jpg",
        nombre: "theburner",
        resena: "Why did Victoria turn my baby to a bad guy?! It's not fair."
      },
      imagen: "../assets/lrr.jpg",
      disponibles: '20 ejemplares restantes.',
      precio: '$315.00',
      paginas: '383 páginas'
    },
    {id:18,
      titulo: "La Espada de Cristal",
      autor: "Victoria Aveyard",
      editorial: "HarperCollins",
      valoracion: [1, 2, 3, 4],
      lanzamiento: '2016',
      resenas:{
        perfil: "../assets/fotojiwo.gif",
        nombre: "thethunder",
        resena: "Things are going to get really crazy rn."
      },
      imagen: "../assets/ledc.jpg",
      disponibles: '32 ejemplares restantes.',
      precio: '$315.00',
      paginas: '444 páginas'
    },
    {id:19,
      titulo: "La jaula del Rey",
      autor: "Victoria Aveyard",
      editorial: "HarperCollins",
      valoracion: [1, 2, 3, 4],
      lanzamiento: '2017',
      resenas:{
        perfil: "../assets/perfiljk.jpg",
        nombre: "madqueen",
        resena: "I'm really pissed at Cal."
      },
      imagen: "../assets/ljdr.jpg",
      disponibles: '19 ejemplares restantes.',
      precio: '$315.00',
      paginas: '507 páginas'
    },
    {id:20,
      titulo: "Tormenta de Guerra",
      autor: "Victoria Aveyard",
      editorial: "HarperCollins",
      valoracion: [1, 2, 3, 4],
      lanzamiento: '2018',
      resenas:{
        perfil: "../assets/sweetener.jpg",
        nombre: "thecrxwn",
        resena: "It has left me without knowing what to do with my life."
      },
      imagen: "../assets/tdg.jpg",
      disponibles: '23 ejemplares restantes.',
      precio: '$315.00',
      paginas: '662 páginas'
    },
    {id:21,
      titulo: "El Juego de Ender",
      autor: "Orson Scott Card",
      editorial: "TOR",
      valoracion: [1, 2, 3, 4],
      lanzamiento: '1994',
      resenas:{
        perfil: "../assets/fotoau.jfif",
        nombre: "endergxme",
        resena: "I really like the evolution of the character, can't wait to read more of this."
      },
      imagen: "../assets/ejde.jpg",
      disponibles: '27 ejemplares restantes.',
      precio: '$299.00',
      paginas: '324 páginas'
    },

  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrincipalPage');
  }

  Book(id: number){
    this.navCtrl.push(this.book, {libro: this.libros[id], carrito: this.carrito});
  }

  carro(){
    this.navCtrl.push(this.car, {carrito: this.carrito});
  }

}
