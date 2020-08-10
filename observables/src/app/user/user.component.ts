import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { UserServiceComponent } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  id: number;
  private activated = true;

  constructor(private route: ActivatedRoute,
              private userService: UserServiceComponent) { }

  /** we don't need destroy method because when using observable provided by angular it handeld it automaticaly ==> params */
  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
        }
      );
  }

  onActivate(){
    this.userService.activated.next(this.activated);
  }

}
