import { Component} from '@angular/core';
import { HomePageNavigator } from './HomeNavigator';
import { HomePageViewModel } from './HomeViewModel';
import { BasePage } from '../base/BasePage.component';
import { AppDataManager } from '../dataManager/app.dataManager';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage extends BasePage<HomePageViewModel, HomePageNavigator> implements HomePageNavigator {

  constructor(public viewModel : HomePageViewModel, dataManager : AppDataManager) {
    super(viewModel, dataManager);
    viewModel.setNavigator(this);
  }

  submit() : void{
     this.getViewModel().submitEvent();
  }

  showLoader(): void {
   console.log("showLoader not implemented.");
   
  }

  hideLoader(): void {
    console.log("hideLoader not implemented.");
  }

}
