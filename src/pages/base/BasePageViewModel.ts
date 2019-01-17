import { BasePageNavigator } from './BaseNavigator';
import { DataManager } from '../dataManager/data.manager';
import { Platform, AlertController, LoadingController, Loading } from 'ionic-angular';
import { Observable } from "rxjs/Observable";
import { mapTo } from "rxjs/operators/mapTo";
import { Network } from "@ionic-native/network";
import { NgZone } from "@angular/core";
import { Subscription } from 'rxjs';

export abstract class BasePageViewModel<T extends BasePageNavigator>{

    private navigator: T;
    private dataManager: DataManager;
    private platform: Platform;

    private online: Observable<boolean> = null;
    public isOnline: boolean = true;

    private network: Network;
    protected ngZone: NgZone;
    private internetSubscription : Subscription;
    private loadingCtrl: LoadingController;
    private alertCtrl: AlertController;
    private loading : Loading;

    public BasePageViewModel() {

    }

    setNavigator(navigator: T): void {
        this.navigator = navigator;
    }

    getNavigator(): T {
        return this.navigator;
    }

    setDataManager(dataManager: DataManager): void {
        this.dataManager = dataManager;
    }

    getDataManager(): DataManager {
        return this.dataManager;
    }

    setPlatform(platfrom: Platform): void {
        this.platform = platfrom;
    }

    getPlatform(): Platform {
        return this.platform;
    }

    setDependency(platfrom: Platform, network: Network, ngZone: NgZone, alertCtrl : AlertController, loadingCtrl : LoadingController): void {
        this.platform = platfrom;
        this.network = network;
        this.ngZone = ngZone;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
    }

    /* 
    * Ionic View LifeCycle Methods
    * Mapping of Ionic lifeCycle method to Custom method
    * Resembles to Native Android fragment  
    */
    public abstract onIonCreate(): void;
    public abstract onIonStart(): void;
    public abstract onIonResume(): void;
    public abstract onIonPause(): void;
    public abstract onIonStop(): void;
    public abstract onIonDestroy(): void;

    /*
    * Native Device LifeCycle Methods
    * Methods are Mapped to Native Android Device Methods
    * onResume and onPause  
    */
    public abstract onDeviceResume(event: Event): void;
    public abstract onDevicePause(event: Event): void;


    public initNetwork(): Observable<boolean> {

        if (this.network.type == "none")
            this.isOnline = false;

    this.internetSubscription  =  Observable.create((observer: any) => {
            observer.next(this.isOnline);
            console.log("disconnectionObservable  ==> " + this.isOnline);
        }).pipe(mapTo(this.isOnline))
            .merge(this.network.onDisconnect().pipe(mapTo(false)))
            .merge(this.network.onConnect().pipe(mapTo(true))).share()
            .subscribe((status: boolean) => {
                this.ngZone.run(() => {
                    this.isOnline = status;
                    this.getNavigator().isConnected(this.isOnline);
                });
                console.log("viewModel subcription ==> " + this.isOnline);
            });

            this.getNavigator().setSubscription(this.internetSubscription);

        return null;

    }


    showLoading(){
         this.loading = this.loadingCtrl.create({
            content : 'Please wait...',
            dismissOnPageChange : true
        });

        this.loading.present();
    }

    hideLoading(){
        this.loading.dismiss();
    }

    showError(text : string){

        this.hideLoading();

        let alert = this.alertCtrl.create({
            title : 'Fail',
            subTitle : text,
            buttons : ['OK']
        });

        alert.present();
    }

}