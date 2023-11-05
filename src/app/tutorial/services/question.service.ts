import { Injectable } from "@angular/core";
import { ValidatorFn, AbstractControl } from "@angular/forms";
import { Router } from "@angular/router";
import { map, Observable, pluck } from "rxjs";
import { api } from "../constants/api";
import { CustomHttpClient } from "./custom-http-client.service";

@Injectable({
    'providedIn' : 'root'
})

export class QuestionService
{
    constructor(private _customHttpClient: CustomHttpClient,private _router: Router)
    {
    }


    public fetchFirstQuestion(): Observable<any>
    {
        return this._customHttpClient.get(api.fetchFirstQuestion);
    }
    public fetchLessons(): Observable<any>
    {
        return this._customHttpClient.get(api.fetchLessons);
    }
    
    public selectAnswersByuser(data): Observable<any>
    {
        return this._customHttpClient.post(api.selectAnswersByuser,data);
    }
    public fetchNextQuestionById(questionId,event:{isTrue:boolean,answer:string}): Observable<any>
    {
        return this._customHttpClient.post(api.fetchNextQuestionById+'/'+questionId,event);
    }
}