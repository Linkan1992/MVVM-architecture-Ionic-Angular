import { Injectable } from "@angular/core";
import { ApiService } from "./api.manager";
import { HttpClient } from "@angular/common/http";
import { BaseApiServiceHelper } from "../../base/BaseApi.Service";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/switchMap'
import { APIEndPoints } from "../../../utils/api.endpoints";
import { Products } from "../../../api.response/login.response";


@Injectable()
export class ApiServiceHelper extends BaseApiServiceHelper implements ApiService {

    constructor(public http: HttpClient) {
        super(http)
    }

    login(): Observable<any> {
        console.log("login method not implemented.");
        //   return this.httpGet('${Api_url}');
        return null;
    }

    getAvailableJobList(): Observable<Products[]> {
        console.log("getAvailableJobList method not implemented.");

        return this.httpGet(APIEndPoints.productList);

        // return null;
    }

    getCityList(body?: any): Observable<any> {
        console.log("getCityList method not implemented.");
        // return this.httpPost('${Api_url}', '${body}')
        //            .map((response) => response.products)
        //            .switchMap(products => Observable.from(products))
        //            .filter((prod) => prod.rating >3);

        return null;
    }

    getJobPositionList(body?: any): Observable<any> {
        console.log("getJobPositionList method not implemented.");
        //   return this.httpPut('${Api_url}', '${body}');
        return null;
    }

    getAppliedJobList(body?: any): Observable<any> {
        console.log("getAppliedJobList method not implemented.");
        //   return this.httpDelete('${Api_url}');
        return null;
    }

}