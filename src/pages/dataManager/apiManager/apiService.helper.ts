import { Injectable } from "@angular/core";
import { ApiService } from "./api.manager";


@Injectable()
export class ApiServiceHelper implements ApiService {

    constructor(){

    }

    login(): void {
        console.log("login method not implemented.");
    }

    getAvailableJobList(): void {
        console.log("getAvailableJobList method not implemented.");
    }

    getCityList(): void {
        console.log("getCityList method not implemented.");
    }

    getJobPositionList(): void {
        console.log("getJobPositionList method not implemented.");
    }

    getAppliedJobList(): void {
        console.log("getAppliedJobList method not implemented.");
    }


}