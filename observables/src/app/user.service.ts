import { Injectable, EventEmitter} from '@angular/core';
import { Subject } from 'rxjs';



@Injectable({providedIn: 'root'})
export class UserServiceComponent{
    // activated = new EventEmitter<boolean>();
    activated = new Subject<boolean>();
}