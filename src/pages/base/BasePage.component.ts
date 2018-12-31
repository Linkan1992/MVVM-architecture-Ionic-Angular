import { BasePageNavigator } from "./BaseNavigator";
import { BasePageViewModel } from "./BasePageViewModel";
import { AppDataManager } from "../dataManager/app.dataManager";


export class BasePage<K extends BasePageViewModel<M>, M extends BasePageNavigator>{

    version : any;

    constructor(public viewModel: K, dataManager : AppDataManager) {
      viewModel.setDataManager(dataManager)
    }

    getViewModel(): K {
        return this.viewModel;
    }

    responseSuccess(): void {
        console.log("responseSuccess not implemented.");
      }
    
      responseError(): void {
       console.log("responseError not implemented.");
      }

      pageNavigate(value : any): void {
        this.version = value;  
        console.log("pageNavigate not implemented =>  " + value);
      }

    ionViewDidLoad() {this.getViewModel().onCreate();}

    ionViewWillEnter() {this.getViewModel().onStart();}

    ionViewDidEnter(){this.getViewModel().onResume();}

    ionViewWillLeave() {this.getViewModel().onPause();}

    ionViewDidLeave() {this.getViewModel().onStop();}

    ionViewWillUnload() {this.getViewModel().onBackPressDestroy();}


}