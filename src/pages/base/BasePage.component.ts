import { BasePageNavigator } from "./BaseNavigator";
import { BasePageViewModel } from "./BasePageViewModel";
import { AppDataManager } from "../dataManager/app.dataManager";
import { Network } from "@ionic-native/network";
import { NgZone } from "@angular/core";
import { Subscription } from "rxjs/Subscription";
import { Products } from "../../api.response/login.response";


export class BasePage<K extends BasePageViewModel<M>, M extends BasePageNavigator>{

  protected version: any;
  public isOnline: boolean;
  public subcription: Subscription;
  public products : Products[];

  constructor(public viewModel: K, dataManager: AppDataManager, public network: Network, public ngZone: NgZone) {
    viewModel.setDataManager(dataManager)

    this.getViewModel().getPlatform().ready().then(() => {
      this.getViewModel().getPlatform().resume.subscribe((e: Event) => this.onDeviceResume(e));
      this.getViewModel().getPlatform().pause.subscribe((e: Event) => this.onDevicePause(e));
    });
  }

  getViewModel(): K {
    return this.viewModel;
  }

  responseSuccess(products : Products[]): void {
    this.products = products;
    console.log("responseSuccess not implemented. "  + JSON.stringify(this.products));
  }

  responseError(): void {
    console.log("responseError not implemented.");
  }

  pageNavigate(value: any): void {
    this.version = value;
    console.log("pageNavigate not implemented =>  " + value);
  }

  isConnected(isOnline?: boolean): void {
    this.isOnline = isOnline;
    console.log("Network Status on BasePage =>  " + this.isOnline);
  }

  setSubscription(subscription?: Subscription): void {
  //  this.subcription.add(subscription);

    this.subcription = subscription;
  }


  /*
  * Ionic View LifeCycle Methods
  * Methods resembles to Native Fragments Method
  * This Method contains HTML View binding and Native Plugin code
  * Native Plugin Code must be written only after getting the Device Ready
  * If any native plugin code gets executed before device ready state 
  * Device will be non responsive and App will get Crashed 
  */
  ionViewDidLoad() {
    this.getViewModel().getPlatform().ready().then(() => {
      this.getViewModel().onIonCreate();
    });
  }

  ionViewWillEnter() {
    this.getViewModel().getPlatform().ready().then(() => {
      this.getViewModel().initNetwork();
      this.getViewModel().onIonStart();
    });
  }

  ionViewDidEnter() {
    this.getViewModel().getPlatform().ready().then(() => {
      this.getViewModel().onIonResume();
    });
  }

  ionViewWillLeave() {
    this.getViewModel().getPlatform().ready().then(() => {
      this.subcription.unsubscribe();
      this.getViewModel().onIonPause();
    });
  }

  ionViewDidLeave() {
    this.getViewModel().getPlatform().ready().then(() => {
      this.getViewModel().onIonStop();
    });
  }

  ionViewWillUnload() {
    this.getViewModel().getPlatform().ready().then(() => {
      this.getViewModel().onIonDestroy();
    });
  }


  /*
   * Native Device Life Cycle Method 
   */
  onDeviceResume(event: Event): void {
    this.getViewModel().onDeviceResume(event);
  }

  onDevicePause(event: Event): void {
    this.getViewModel().onDevicePause(event);
  }



}