import { Component, NgZone} from '@angular/core';
import { HomePageNavigator } from './HomeNavigator';
import { HomePageViewModel } from './HomeViewModel';
import { BasePage } from '../base/BasePage.component';
import { AppDataManager } from '../dataManager/app.dataManager';
import { IonicPage } from 'ionic-angular';
import { Network } from '@ionic-native/network';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage extends BasePage<HomePageViewModel, HomePageNavigator> implements HomePageNavigator {

  constructor(viewModel : HomePageViewModel, 
    dataManager : AppDataManager, network : Network, 
    ngZone : NgZone) {
    super(viewModel, dataManager, network, ngZone);
    viewModel.setNavigator(this);
  }

  submit() : void{
     this.getViewModel().submitEvent();
  }

  getAllJObsAvailable() : void{
    this.getViewModel().getAvailableJobList();
 }

  showLoader(): void {
   console.log("showLoader not implemented.");
   console.log("network status   " + this.isOnline);
   
  }

  hideLoader(): void {
    console.log("hideLoader not implemented.");
    console.log("network status   " + this.isOnline);
  }

}
