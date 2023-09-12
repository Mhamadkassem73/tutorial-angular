import { Injectable } from "@angular/core";

@Injectable({
    'providedIn' : 'root'
})

export class LoggerService
{
    public logger(msg)
    {
        console.log(msg);
    }

    public loggerWarn(msg)
    {
        console.warn(msg);
    }
}