import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('HTTP Request:', req);
    const clonedRequest = req.clone({
      setHeaders: {
        'Authorization': 'Bearer your-token-here',
        'Custom-Header': 'Custom-Value',
      },
    });

    console.log('HTTP Request:', clonedRequest);

    return next.handle(clonedRequest).pipe(
      catchError((error) => {
        console.error('HTTP Error:', error);
        throw error;
      })
    );
  }
}
