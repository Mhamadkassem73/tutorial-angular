import { Injectable } from "@angular/core";
import { ValidatorFn, AbstractControl } from "@angular/forms";
import { Router } from "@angular/router";
import { map, Observable, pluck } from "rxjs";
import { api } from "../constants/api";
import { CustomHttpClient } from "./custom-http-client.service";

@Injectable({
    'providedIn' : 'root'
})

export class UserService
{
    constructor(private _customHttpClient: CustomHttpClient,private _router: Router)
    {

    }

    public signIn(form:{username,password}): Observable<any>
    {
        console.log(form); 
        console.log(api.signIn); 
        return this._customHttpClient.postWithoutHeaders(api.signIn,form);
    }

    public fetchUser(form): Observable<any>
    {
        return this._customHttpClient.post(api.fetchUser,form);
    }
    public addUser(form): Observable<any>
    {
        return this._customHttpClient.post(api.addUser,form);
    }
    public updateUser(form): Observable<any>
    {
        return this._customHttpClient.put(api.updateUser+"/"+form['id'],form);
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
    public getName()
    {
        return sessionStorage.getItem('name');
    }
}