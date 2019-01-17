import { Subscription } from "rxjs";

export declare class BasePageNavigator{
    showLoader() : void;
    hideLoader() : void;
    pageNavigate(value ?: any) : void;
    isConnected(isOnline ?: boolean) : void;
    setSubscription(subscription ?: Subscription) : void;
}