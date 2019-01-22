import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, IonicPage, Content } from 'ionic-angular';

/**
 * Generated class for the LogoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-logo',
  templateUrl: 'logo.html',
})
export class LogoPage {

  hideBack : boolean;
  headerName : string;
  @ViewChild(Content) content: Content;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LogoPage');
  }

  ionViewDidEnter(){
    console.log('ionViewDidEnter LogoPage');
    this.hideBack = false;
    this.headerName = "LogoPage";
  }

  changeHeader(pageOldName:string){
    console.log('page old name is ===> ' + pageOldName);
    this.hideBack = !this.hideBack;
    this.headerName = this.hideBack ? "StarWars" : "LogoPage";
  }

}
