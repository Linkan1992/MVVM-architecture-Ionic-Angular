import { Observable } from "rxjs/Observable";
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/filter';
import "rxjs/add/operator/retry";
import "rxjs/add/operator/timeout";
import 'rxjs/add/operator/observeOn';
import 'rxjs/add/operator/subscribeOn';
import 'rxjs/add/observable/throw';
import 'rxjs/scheduler/async';
import 'rxjs/scheduler/asap';
import 'rxjs/scheduler/queue';
import 'rxjs/';
import { share } from "rxjs/operator/share";
import { async } from "rxjs/scheduler/async";
import { asap } from "rxjs/scheduler/asap";


export class BaseApiServiceHelper {

    private RETRY_CALL: number = 3;
    private API_TIMEOUT_RESPONSE: number = 5000;
    private API_BASE_URL: string = "http://intraintrade.com/";

    constructor(public http: HttpClient) {

    }


    protected httpGet(urlEndPoint: string): Observable<any> {
        debugger;
        // const headers = ... prepare headers for the request ...
        const options = this.getHttpHeaders();
        const get = this.http.get(this.API_BASE_URL + urlEndPoint, options)
            .timeout(this.API_TIMEOUT_RESPONSE)      // fetch response within 5 seconds
            .retry(this.RETRY_CALL)                  // on failed transaction retry 3 times 
            .map((res: any) => res)           // ...and calling .json() on the response to return data
            .filter((res) => {
                if (res.status === 200 || res.status == "success") {
                    console.log("Api success response")
                    return res;
                } else {
                    console.log("Api Error response")
                    this.onHttpError();
                }
            })
            .map((res) => res.data)
            //   .catch((error: any) => Observable.throw(error.json().error || 'Server error')) //...errors if any
            .catch((error: any) => this.onHttpError(error)) //...errors if any

        return get;
    }

    protected httpPost(urlEndPoint: string, body?: any): Observable<any> {
        // const headers = ... prepare headers for the request ...
        const options = this.getHttpHeaders();
        const post = this.http.post(this.API_BASE_URL + urlEndPoint, body, options).pipe(share);
        post.subscribe(null, this.onHttpError);
        return post;
    }


    protected httpDelete(urlEndPoint: string): Observable<any> {
        // const headers = ... prepare headers for the request ...
        const options = this.getHttpHeaders();
        const dele = this.http.delete(this.API_BASE_URL + urlEndPoint, options).share();
        dele.subscribe(null, this.onHttpError);
        return dele;
    }

    protected httpPut(urlEndPoint: string, body?: any): Observable<any> {

        /**
        * With the map operator, we call the .json method on the response because
        * the actual response is not a collection of data but a JSON string.
        */

        const options = this.getHttpHeaders();       // const headers = ... prepare headers for the request ...
        const put = this.http.put(this.API_BASE_URL + urlEndPoint, body, options)
            .timeout(this.API_TIMEOUT_RESPONSE)      // fetch response within 5 seconds
            .retry(this.RETRY_CALL)                  // on failed transaction retry 3 times 
            .map((res: any) => res.json())           // ...and calling .json() on the response to return data
            .filter((res) => res.status === 200 || res.status == "success")
            .share()
            .subscribeOn(async)
            .observeOn(asap)
            .catch((error: any) => Observable.throw(error.json().error || 'Server error')) //...errors if any
            //  .catch((error:any) => this.onHttpError()) //...errors if any
            .pipe(share);

        put.subscribe(null, this.onHttpError); // subscribing for error ans sharing the same observable
        return put;
    }


    /**
     * <P> Above both statement are true .share() method shares the original observable
     * to multiple observer which subscribe to it and makes it hot observable which start emitting 
     * data even before any observer subscription</P>
     */

    private getHttpHeaders() {

        const httpOptions = {
            headers: new HttpHeaders({
                // 'Content-Type': 'application/json',
                // 'Api-key': 'my-auth-token',
                // 'Session-Key': 'login-session-key'

                // 'Access-Control-Allow-Origin' : '*',
                // 'Access-Control-Allow-Methods' : 'POST, GET, OPTIONS, PUT',
                // 'Accept' : 'application/json',
                // 'content-type' : 'application/json',
                'Api-key': '5d4d3970f1f84543b82a265b92e65983'

            })
        };

        console.log("request time ==> " + new Date());

        return httpOptions;
    }


    onHttpError = (error?: HttpErrorResponse) => {
        debugger;
        // Do common error tasks (logging, registering, configuration...)
        console.log("Some Network Error Occured");
        return Observable.throw(error.message || 'Server error')
    };


}
