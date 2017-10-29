import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { NewClientePage } from '../pages/new-cliente/new-cliente';
import { EditClientePage } from '../pages/edit-cliente/edit-cliente';
import { ClienteServicesProvider } from '../providers/cliente-services/cliente-services';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    NewClientePage,
    EditClientePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    NewClientePage,
    EditClientePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ClienteServicesProvider
  ]
})
export class AppModule {}
