import { BasePageViewModel } from "../base/BasePageViewModel";
import { HomePageNavigator } from './HomeNavigator';
import { Injectable, NgZone } from '@angular/core';
import { Platform, AlertController, LoadingController } from "ionic-angular";
import { Network } from "@ionic-native/network";
import { async } from "rxjs/scheduler/async";
import { asap } from "rxjs/scheduler/asap";
import { Products } from "../../api.response/login.response";
import { Observable } from "rxjs/Observable";


@Injectable()
export class HomePageViewModel extends BasePageViewModel<HomePageNavigator>{
    
    version = "2.3";
    langAct: any;
    logIn: any;

    private products = [];

    constructor(platform: Platform, 
        network : Network, ngZone : NgZone, 
        alertCtrl : AlertController, 
        loadingCtrl : LoadingController) {
        super();
        this.setPlatform(platform);
        this.setDependency(platform, network, ngZone, alertCtrl, loadingCtrl);
    }

    // Native Device Method Calls
    public onDeviceResume(event: Event): void {
        console.log("onDeviceResume method got called  ==> " + event);
    }

    public onDevicePause(event: Event): void {
        console.log("onDevicePause method got called  ==> " + event)
    }

    // Ionic Page Lifecycle Method Calls
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
        this.weakRef.delete(navigator);
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
        this.getNavigator().responseSuccess(this.products);

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
        // this.getDataManager().login().subscribe((x : any) =>{},
        //                                         (error: any) =>{console.log("some error occured in JSON Parsing")},
        //                                         () => "Execution Completed");

        this.getDataManager().login();
        this.getDataManager().getAppliedJobList();
        this.getDataManager().getAvailableJobList();
        this.getDataManager().getCityList();
        this.getDataManager().getJobPositionList();

        console.log("---------------------------------");

        // interface implementation with data manager local Database layer
        this.getDataManager().fetchParam();
    }


    getAvailableJobList() : void{
        if(this.isOnline){
            this.showLoading();
            this.getDataManager()
                .getAvailableJobList()
                .flatMap((products : Products[]) => {
                    return Observable.from(products).delay(2000);   // initial delay of 2 seconds before data emission
                })
                .concatMap(product => Observable.of(product).delay(1000)) // delay between each emission and data loading
                .subscribeOn(async)
                .observeOn(asap)
                .subscribe((product : Products) => {
                    console.log("subscribed product is => " + new Date() + " ==> " + JSON.stringify(product));
                    this.ngZone.run(() =>{ 
                        this.products.push(product);
                        this.getNavigator().responseSuccess(this.products);
                    });
                },
                (error) => this.showError(error),
                () => {
                    this.hideLoading();
                    console.log("subscription complete => " + JSON.stringify(this.products));
                })
        }
    }

}