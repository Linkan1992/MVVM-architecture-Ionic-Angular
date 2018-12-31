import { BasePageViewModel } from "../base/BasePageViewModel";
import { HomePageNavigator } from './HomeNavigator';
import { Injectable } from '@angular/core';
import { Platform, setupPlatform } from "ionic-angular";

@Injectable()
export class HomePageViewModel extends BasePageViewModel<HomePageNavigator>{

    version = "2.3";
    langAct: any;
    logIn: any;

    constructor(platform: Platform) {
        super();
        this.setPlatform(platform);
    }

    // Native Divice Method Calls
    public onDeviceResume(event: Event): void {
        console.log("onDeviceResume method got called  ==> " + event);
    }

    public onDevicePause(event: Event): void {
        console.log("onDevicePause method got called  ==> " + event)
    }

    // Ionic Lifecycle Method Calls
    public onIonCreate(): void {
        console.log("onIonCreate method got called")
    }

    public onIonStart(): void {
        console.log("onIonStart method got called")
    }

    public onIonResume(): void {
        console.log("onIonResume method got called")
    }

    public onIonPause(): void {
        console.log("onIonPause method got called")
    }

    public onIonStop(): void {
        console.log("onIonStop method got called")
    }

    public onIonDestroy(): void {
        console.log("onIonDestroy method got called")
    }


    // HTML Button click event
    submitEvent(): any {

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