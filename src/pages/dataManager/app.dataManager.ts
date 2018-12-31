import { Injectable } from "@angular/core";
import { DataManager } from "./data.manager";
import { DatabaseManagerHelper } from "./databaseManager/db.manager.helper";
import { DatabaseManager } from "./databaseManager/database.manager";
import { ApiServiceHelper } from "./apiManager/apiService.helper";
import { AppPreferenceHelper } from "./prefManager/appPref.helper";

@Injectable()
export class AppDataManager implements DataManager {

    private dbHelper: DatabaseManager;
    private apiHelper : ApiServiceHelper;
    private prefHelper : AppPreferenceHelper;

    constructor(dbHelper: DatabaseManagerHelper, apiHelper : ApiServiceHelper, prefHelper : AppPreferenceHelper) {
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

    login(): void {
        console.log("login method not implemented.");
        this.apiHelper.login();
    }
    getAvailableJobList(): void {
        console.log("getAvailableJobList method not implemented.");
        this.apiHelper.getAvailableJobList();
    }
    getCityList(): void {
        console.log("getCityList method not implemented.");
        this.apiHelper.getCityList();
    }
    getJobPositionList(): void {
        console.log("getJobPositionList method not implemented.");
        this.apiHelper.getJobPositionList();
    }
    getAppliedJobList(): void {
        console.log("getAppliedJobList method not implemented.");
        this.apiHelper.getJobPositionList();
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