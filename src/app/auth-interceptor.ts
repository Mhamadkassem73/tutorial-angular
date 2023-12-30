import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, timeout } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private router: Router) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(request);
    console.log(next);

    return next.handle(request).pipe(
      tap(
        (event) => {},
        (error) => {
          if (error instanceof HttpErrorResponse && error.status === 401 ) {
            console.log(error);
                this.router.navigate(['/sign-in']);
          }
        }
      )
    );
  }
}
