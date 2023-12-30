import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LoggerService } from "./logger.service";
import { Router } from "@angular/router";
@Injectable({
    'providedIn': 'root'
})

export class CustomHttpClient {

    constructor(private _httpClient: HttpClient,
        private router: Router,
        private _loggerService: LoggerService) {

    }

    public get(url): Observable<any> {
        let headers = new HttpHeaders();
        this._loggerService.logger(url);
        if (sessionStorage.getItem('Authorization')) {
            headers = headers.set('Authorization', sessionStorage.getItem('Authorization'));
        }
        else {
            this.router.navigate(['/sign-in']);
        }
        return this._httpClient.get(url, { headers: headers });
    }




    public post(url, body): Observable<any> {
        let headers = new HttpHeaders();
        this._loggerService.logger(url);
        if (sessionStorage.getItem('Authorization')) {
            headers = headers.set('Authorization', sessionStorage.getItem('Authorization'));
        }
        else {
            this.router.navigate(['/sign-in']);
        }
        return this._httpClient.post(url, body, { headers: headers });
    }

    public postWithoutHeaders(url, body): Observable<any> {
        let headers = new HttpHeaders();
        this._loggerService.logger(url);
        if (sessionStorage.getItem('db')) {
            headers = headers.set('lan', sessionStorage.getItem('lang'));
            headers = headers.set('db', sessionStorage.getItem('db'));
            headers = headers.set('startPeriod', sessionStorage.getItem('startPeriod'));
            headers = headers.set('endPeriod', sessionStorage.getItem('endPeriod'));
            headers = headers.set('companyId', sessionStorage.getItem('companyId'));
        }

        return this._httpClient.post(url, body, { headers: headers });
    }

    public getWithoutHeader(url): Observable<any> {
        this._loggerService.logger(url);
        return this._httpClient.get(url);
    }

    public put(url, body): Observable<any> {
        let headers = new HttpHeaders();
        this._loggerService.logger(url);
        if (sessionStorage.getItem('Authorization')) {
            headers = headers.set('Authorization', sessionStorage.getItem('Authorization'));
        }
        else {
            this.router.navigate(['/sign-in']);
        }
        return this._httpClient.put(url, body, { headers: headers });
    }

    public delete(url): Observable<any> {
        let headers = new HttpHeaders();
        this._loggerService.logger(url);
        if (sessionStorage.getItem('Authorization')) {
            headers = headers.set('Authorization', sessionStorage.getItem('Authorization'));
        }
        else {
            this.router.navigate(['/sign-in']);
        }
        return this._httpClient.delete(url, { headers: headers });
    }

    public putWithoutHeaders(url, body): Observable<any> {
        this._loggerService.logger(url);
        return this._httpClient.put(url, body);
    }
}

