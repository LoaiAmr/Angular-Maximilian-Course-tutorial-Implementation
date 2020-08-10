import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  user: {id: number, name: string};
  paramsSubscribtion: Subscription

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    };
    this.paramsSubscribtion = this.route.params.subscribe(
      (params: Params) =>{
        this.user.id = params['id'];
        this.user.name = params['name'];
      }
    );
  }

  /*  when you reload component in ngOnInit() to reload the component it destroy the component
      and make it unsubscribe() for paramters it does it automaticaly **/
  ngOnDestroy(){
    this.paramsSubscribtion.unsubscribe();
  }

}