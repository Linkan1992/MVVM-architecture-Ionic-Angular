import { Injectable } from "@angular/core";
import { DataManager } from "./data.manager";
import { DatabaseManagerHelper } from "./databaseManager/db.manager.helper";
import { DatabaseManager } from "./databaseManager/database.manager";
import { ApiServiceHelper } from "./apiManager/apiService.helper";
import { AppPreferenceHelper } from "./prefManager/appPref.helper";
import { ApiService } from "./apiManager/api.manager";
import { PrefManager } from "./prefManager/pref.manager";
import { Observable } from "rxjs/Observable";
import { Products } from "../../api.response/login.response";

@Injectable()
export class AppDataManager implements DataManager {

    private dbHelper: DatabaseManager;
    private apiHelper: ApiService;
    private prefHelper: PrefManager;

    constructor(dbHelper: DatabaseManagerHelper, apiHelper: ApiServiceHelper, prefHelper: AppPreferenceHelper) {
        this.dbHelper = dbHelper;
        this.apiHelper = apiHelper;
        this.prefHelper = prefHelper;
    }

    //--------- local DB Methods -----------------

    insertParam(): number {
        console.log("insertParam method not implemented.");
        this.dbHelper.insertParam();
        return 1;
    }

    fetchParam(): void {
        console.log("fetchParam method not implemented.");
        this.dbHelper.fetchParam();
    }

    deleteParam(): void {
        console.log("deleteParam method not implemented.");
        this.dbHelper.deleteParam();
    }

    updateParam(): void {
        console.log("updateParam method not implemented.");
        this.dbHelper.updateParam();
    }


    //--------- ApiService Methods -----------------
    /**
     * <P> Each methods response type must be type guarded 
     * to check for errors at compile time</P>
     */

    login(): Observable<any> {
        console.log("login method not implemented.");
        return this.apiHelper.login();
    }
    
    getAvailableJobList(): Observable<Products[]> {
        console.log("getAvailableJobList method not implemented.");
        return this.apiHelper.getAvailableJobList();
    }
    getCityList(body?: any): Observable<any> {
        console.log("getCityList method not implemented.");
        return this.apiHelper.getCityList();
    }
    getJobPositionList(body?: any): Observable<any> {
        console.log("getJobPositionList method not implemented.");
        return this.apiHelper.getJobPositionList();
    }
    getAppliedJobList(body?: any): Observable<any> {
        console.log("getAppliedJobList method not implemented.");
        return this.apiHelper.getJobPositionList();
    }

    //--------- PrefManager Methods -----------------

    isLanguageActivated() {
        console.log("isLanguageActivated method not implemented.");
        return this.prefHelper.isLanguageActivated();
    }

    setLogout(): void {
        console.log("setLogout method not implemented.");
        this.prefHelper.setLogout();
    }

    setLanguageActivated(): void {
        console.log("setLanguageActivated method not implemented.");
        this.prefHelper.setLanguageActivated();
    }

    setLanguageName(): void {
        console.log("setLanguageName method not implemented.");
        this.prefHelper.setLanguageName();
    }

    setUserAvatar(): void {
        console.log("setUserAvatar method not implemented.");
        this.prefHelper.setUserAvatar();
    }

    setUsername(): void {
        console.log("setUsername method not implemented.");
        this.prefHelper.setUsername();
    }


    // ---------- DataManager Layer Methods ------------------

    isLogged(): any {
        console.log("isLogged method not implemented.");
        return true;
    }

}