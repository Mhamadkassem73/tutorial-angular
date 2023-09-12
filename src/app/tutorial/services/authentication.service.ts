import { Injectable } from "@angular/core";
import { ValidatorFn, AbstractControl } from "@angular/forms";
import { Router } from "@angular/router";
import { map, Observable, pluck } from "rxjs";
import { api } from "../constants/api";
import { CustomHttpClient } from "./custom-http-client.service";

@Injectable({
    'providedIn' : 'root'
})

export class AuthenticationService
{
    constructor(private _customHttpClient: CustomHttpClient,private _router: Router)
    {

    }

    public doLogin(form:{username,password})
    {
        // console.log(form); 
        // console.log(api.doLogin); 
        // return this._customHttpClient.postWithoutHeaders(api.doLogin,form);
    }

    public setToken(token: string,name:string)
    {
        sessionStorage.setItem('Authorization',"bearer "+token);
        sessionStorage.setItem('name',name);
    }

    public removeToken(token: string)
    {
        sessionStorage.removeItem('Authorization');
    }

    public logout()
    {
        sessionStorage.clear();
        this._router.navigateByUrl('/sign-in');
    }

    public getToken()
    {
        return sessionStorage.getItem('Authorization');
    }
}