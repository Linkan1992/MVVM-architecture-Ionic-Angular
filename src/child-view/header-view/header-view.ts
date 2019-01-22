import { Component, Input, EventEmitter, Output } from '@angular/core';
import { NavController, NavParams, App, AlertController, Platform } from 'ionic-angular';

/**
 * Generated class for the HeaderViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-header-view',
  templateUrl: 'header-view.html',
})
export class HeaderViewPage {

  @Input('backButtonHide')
  hideBackButton : boolean;
  @Input('pageTitle')
  headerTitle : string;
  @Output() updateHeader = new EventEmitter();

  private exitDialogVisible = false;

  constructor(public navCtrl: NavController,  
              public navParams: NavParams,
              public platform: Platform,
              public app: App,
              public alertCtrl: AlertController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad HeaderViewPage');
  }

  changeTitle(){
    this.updateHeader.emit(this.headerTitle);
  }

  goBack(){

  let nav = this.app.getActiveNavs()[0];
  let activeView = nav.getActive();

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


}
