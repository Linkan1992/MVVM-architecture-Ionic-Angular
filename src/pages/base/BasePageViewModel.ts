
import { BasePageNavigator } from './BaseNavigator';
import { DataManager } from '../dataManager/data.manager';

export abstract class BasePageViewModel<T extends BasePageNavigator>{

    private navigator: T;
    private dataManager : DataManager;

    BasePageViewModel() {
       
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

    public abstract onCreate(): void;
    public abstract onStart(): void;
    public abstract onResume(): void;
    public abstract onPause(): void;
    public abstract onStop(): void; 
    public abstract onBackPressDestroy(): void;

}