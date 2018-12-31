import { PrefManager } from "./pref.manager";
import { Injectable } from "@angular/core";

@Injectable()
export class AppPreferenceHelper implements PrefManager{

   isLanguageActivated() {
        console.log("isLanguageActivated method not implemented.");
        return false;
    }

    setLogout(): void {
        console.log("setLogout method not implemented.");
    }

    setLanguageActivated(): void {
        console.log("setLanguageActivated method not implemented.");
    }

    setLanguageName(): void {
        console.log("setLanguageName method not implemented.");
    }

    setUserAvatar(): void {
        console.log("setUserAvatar method not implemented.");
    }

    setUsername(): void {
        console.log("setUsername method not implemented.");
    }

}