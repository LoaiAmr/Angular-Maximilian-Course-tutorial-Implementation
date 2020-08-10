import { HttpInterceptor, HttpRequest, HttpHandler, HttpEventType } from '@angular/common/http';
import { tap } from 'rxjs/operators';



export class LoggingInterceptorService implements HttpInterceptor{
    
    intercept(request: HttpRequest<any>, next: HttpHandler) {
        console.log('===============Request Arrived===============');
        console.log('request method: ==> ' + request.method);
        console.log('request url: ==> ' + request.url);
        console.log('request responseType: ==> ' + request.responseType);
        console.log('request headers: ==> ' + request.headers);
        console.log('request body: ==> ' + request.body);
        console.log('request clone: ==> ' + request.clone);
        console.log('request params: ==> ' + request.params);
        return next.handle(request).pipe(tap( events => {
            if(events.type === HttpEventType.Response) {
                console.log('===============Response Arrived===============');
                console.log('events type: ==> ' + events.type);
                console.log('events url: ==> ' + events.url);
                console.log('events status: ==> ' + events.status + ' && events statusText: ==> ' + events.statusText);
                console.log('events headers: ==> ' + events.headers);
                console.log('events body: ==> ' + events.body);
                console.log('events clone: ==> ' + events.clone);
                console.log('events Ok: ==> ' + events.ok);
            }
        }));
    }
}