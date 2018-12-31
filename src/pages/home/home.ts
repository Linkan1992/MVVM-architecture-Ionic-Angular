import { Component, Injectable } from '@angular/core';
import { HomePageNavigator } from './HomeNavigator';
import { HomePageViewModel } from './HomeViewModel';
import { BasePage } from '../base/BasePage.component';
import { AppDataManager } from '../dataManager/app.dataManager';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

@Injectable()
export class HomePage extends BasePage<HomePageViewModel, HomePageNavigator> implements HomePageNavigator {

  constructor(public viewModel : HomePageViewModel, dataManager : AppDataManager) {
    super(viewModel, dataManager);
    viewModel.setNavigator(this);
  }

  submit() : void{
     this.getViewModel().submit();
  }

  showLoader(): void {
   console.log("showLoader not implemented.");
   
  }

  hideLoader(): void {
    console.log("hideLoader not implemented.");
  }

}
