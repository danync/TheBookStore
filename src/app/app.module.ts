import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RegistroPage } from '../pages/registro/registro';
import {IonicStorageModule} from "@ionic/storage";
import { PrincipalPage } from '../pages/principal/principal';
import { LibroPage } from '../pages/libro/libro';
import { ResenaPage } from '../pages/resena/resena';
import { CarritoPage } from '../pages/carrito/carrito';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegistroPage,
    PrincipalPage,
    LibroPage,
    ResenaPage,
    CarritoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RegistroPage,
    PrincipalPage,
    LibroPage,
    ResenaPage,
    CarritoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
