import { Observable } from "rxjs/Observable";
import { Products } from "../../../api.response/login.response";

export interface ApiService {
    login(): Observable<any>;
    getAvailableJobList(): Observable<Products[]>;
    getCityList(body ?: any): Observable<any>;
    getJobPositionList(body ?: any): Observable<any>;
    getAppliedJobList(body ?: any): Observable<any>;
}