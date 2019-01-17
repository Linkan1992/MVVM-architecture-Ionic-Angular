import { Component } from '@angular/core';
import { Platform, App, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {

  rootPage: any = 'HomePage';
  private exitDialogVisible = false;

  constructor(public platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    public app: App,
    public alertCtrl: AlertController) {

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      this.onBackPressed();
    });
  }

  onBackPressed() {

    this.platform.registerBackButtonAction(() => {

      let nav = this.app.getActiveNavs()[0];
      let activeView = nav.getActive();

      if (activeView.name === "HomePage") {

        if (nav.canGoBack()) { //Can we go back?
          nav.pop();
        } else {
          const alert = this.alertCtrl.create({
            title: 'App termination',
            message: 'Do you want to close the app?',
            buttons: [{
              text: 'Cancel',
              role: 'cancel',
              handler: () => {
                console.log('Application exit prevented!');
                this.exitDialogVisible = false;
              }
            }, {
              text: 'Close App',
              handler: () => {
                this.platform.exitApp(); // Close this application
              }
            }]
          });

          if (!this.exitDialogVisible) {
            alert.present();
            this.exitDialogVisible = true;
          }
        }
      }
    });
  }


}

