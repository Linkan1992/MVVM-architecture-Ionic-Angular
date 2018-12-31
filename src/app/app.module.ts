import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HomePageViewModel } from '../pages/home/HomeViewModel';
import { AppDataManager } from '../pages/dataManager/app.dataManager';
import { DataManager } from '../pages/dataManager/data.manager';
import { DatabaseManagerHelper } from '../pages/dataManager/databaseManager/db.manager.helper';
import { ApiServiceHelper } from '../pages/dataManager/apiManager/apiService.helper';
import { AppPreferenceHelper } from '../pages/dataManager/prefManager/appPref.helper';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    HomePageViewModel,
    //  {provide: DataManager, useClass: AppDataManager},
    DatabaseManagerHelper, ApiServiceHelper, AppPreferenceHelper,
    AppDataManager
  ]
})
export class AppModule { }
