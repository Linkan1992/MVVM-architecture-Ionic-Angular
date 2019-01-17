import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { AppDataManager } from '../pages/dataManager/app.dataManager';
import { DatabaseManagerHelper } from '../pages/dataManager/databaseManager/db.manager.helper';
import { ApiServiceHelper } from '../pages/dataManager/apiManager/apiService.helper';
import { AppPreferenceHelper } from '../pages/dataManager/prefManager/appPref.helper';
import {HttpClientModule} from '@angular/common/http';
import { Network } from '@ionic-native/network';

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Network,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    DatabaseManagerHelper, ApiServiceHelper, AppPreferenceHelper, AppDataManager
  ]
})
export class AppModule { }
