import { BasePageViewModel } from "../base/BasePageViewModel";
import { HomePageNavigator } from './HomeNavigator';
import { Injectable } from '@angular/core';

@Injectable()
export class HomePageViewModel extends BasePageViewModel<HomePageNavigator>{

    version = "2.3";
    langAct: any;
    logIn: any;

    constructor() {
        super();
    }

    public onCreate(): void {
        console.log("onCreate method got called")
    }
    public onStart(): void {
        console.log("onStart method got called")
    }
    public onResume(): void {
        console.log("onResume method got called")
    }
    public onPause(): void {
        console.log("onPause method got called")
    }
    public onStop(): void {
        console.log("onStop method got called")
    }
    public onBackPressDestroy(): void {
        console.log("onBackPressDestroy method got called")
    }

    submit(): any {

        console.log("---------------------------------");

        console.log("submit not implemented.");

        console.log("---------------------------------");

        // interface implementation with no parameter 
        this.getNavigator().responseError();
        this.getNavigator().responseSuccess();

        console.log("---------------------------------");

        this.getNavigator().showLoader();
        this.getNavigator().hideLoader();

        console.log("---------------------------------");

        // interface implementation with parameter 
        this.getNavigator().pageNavigate(this.version);

        console.log("---------------------------------");

        // interface implementation with data manager preference layer
        this.getDataManager().setUsername();
        this.getDataManager().setUserAvatar();
        this.getDataManager().setLanguageName();
        this.getDataManager().setLanguageActivated();
        this.getDataManager().setLogout();

        this.langAct = this.getDataManager().isLanguageActivated();
        this.logIn = this.getDataManager().isLogged();

        console.log("App Langauge Acttivated ==> " + this.langAct);
        console.log("App Session ==> " + this.logIn);

        console.log("---------------------------------");

        // interface implementation with data manager Api Service layer
        this.getDataManager().login();
        this.getDataManager().getAppliedJobList();
        this.getDataManager().getAvailableJobList();
        this.getDataManager().getCityList();
        this.getDataManager().getJobPositionList();

        console.log("---------------------------------");

        // interface implementation with data manager local Database layer
        this.getDataManager().fetchParam();



    }

}