import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserServiceComponent } from './user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
   userActivate = false;
   private activateSubsription: Subscription;

  constructor(private userService: UserServiceComponent){}

  ngOnInit(){
    this.activateSubsription = this.userService.activated.subscribe( (didActivate: boolean) => {
      this.userActivate = didActivate;
    }
    );
  }

  ngOnDestroy(){
    this.activateSubsription.unsubscribe();
  }
}
