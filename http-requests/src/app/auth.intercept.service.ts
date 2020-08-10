import { HttpInterceptor, HttpRequest, HttpHandler, HttpEventType } from '@angular/common/http';
import { tap } from 'rxjs/operators';

export class AuthInterceptorService implements HttpInterceptor {

    intercept(request: HttpRequest<any>, next: HttpHandler) {
        console.log('Request is on its way');
        console.log('Request url: ' + request.url);
        const modifiedRequest = request.clone({headers: request.headers.append('Auth', 'xyz')})
        console.log('modified Request: ' + modifiedRequest);
        return next.handle(modifiedRequest).pipe(tap( events => {
            console.log(events);
            if(events.type === HttpEventType.Response) {
                console.log('Response Arrived, body data: ');
                console.log('events type: ==> ' + events.type);
                console.log('events url: ==> ' + events.url);
                console.log('events status: ==> ' + events.status + ' && events statusText: ==> ' + events.statusText);
                console.log('events headers: ==> ' + events.headers);
                console.log('events body: ==> ' + events.body);
                console.log('events clone: ==> ' + events.clone);
                console.log('events Ok: ==> ' + events.ok);
            }
        }))
    }
}