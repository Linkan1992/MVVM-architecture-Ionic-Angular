import { BasePageNavigator } from './BaseNavigator';
import { DataManager } from '../dataManager/data.manager';
import { Platform } from 'ionic-angular';

export abstract class BasePageViewModel<T extends BasePageNavigator>{

    private navigator: T;
    private dataManager : DataManager;
    private platform : Platform;

    BasePageViewModel() {
        
    }

    setNavigator(navigator: T): void {
        this.navigator = navigator;
    }

    getNavigator(): T {
        return this.navigator;
    }

    setDataManager(dataManager : DataManager): void {
        this.dataManager = dataManager;
    }

    getDataManager() : DataManager {
        return this.dataManager;
    }

    setPlatform(platfrom : Platform) : void{
     this.platform = platfrom;
    }

    getPlatform() : Platform{
        return this.platform;
    }

    /* 
    * Ionic View LifeCycle Methods
    * Mapping of Ionic lifeCycle method to Custom method
    * Resembles to Native Android fragment  
    */
    public abstract onIonCreate() : void;
    public abstract onIonStart() : void;
    public abstract onIonResume() : void;
    public abstract onIonPause() : void;
    public abstract onIonStop() : void; 
    public abstract onIonDestroy(): void;

     /*
     * Native Device LifeCycle Methods
     * Methods are Mapped to Native Android Device Methods
     * onResume and onPause  
     */
     public abstract onDeviceResume(event : Event) : void;
     public abstract onDevicePause(event : Event) : void;

     
    
}