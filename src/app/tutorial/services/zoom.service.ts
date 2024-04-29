import { Injectable } from "@angular/core";
import { ValidatorFn, AbstractControl } from "@angular/forms";
import { Router } from "@angular/router";
import { map, Observable, pluck } from "rxjs";
import { api } from "../constants/api";
import { CustomHttpClient } from "./custom-http-client.service";

@Injectable({
    'providedIn' : 'root'
})

export class ZoomService
{
    constructor(private _customHttpClient: CustomHttpClient,private _router: Router)
    {
    }


    public createNewZoomMeeting(): Observable<any>
    {
        return this._customHttpClient.get(api.createNewZoomMeeting);
    }
    public fetchZoomById(): Observable<any>
    {
        return this._customHttpClient.get(api.fetchZoomById);
    }
}