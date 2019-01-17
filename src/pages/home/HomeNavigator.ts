import { BasePageNavigator } from "../base/BaseNavigator";
import { Products } from "../../api.response/login.response";

export declare class HomePageNavigator extends BasePageNavigator{
   responseSuccess(products : Products[]) : void;
   responseError() : void;
}