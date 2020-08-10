import { Component, OnInit } from '@angular/core';
import { ServersService } from '../server.service';
import { ActivatedRoute, Params, Router, CanDeactivate } from '@angular/router';
import { CanComponentDeactivate } from './can-decativate-guard-service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, CanComponentDeactivate {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  allowEdit = false;
  changesSaved = false;


  constructor(private serversService: ServersService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    // if you want to retrive a query param or any thing for your url
    console.log(this.route.snapshot.params);
    console.log(this.route.snapshot.queryParams);
    console.log(this.route.snapshot.fragment);
    // this.route.params.subscribe();                 
    this.route.queryParams.subscribe(
      (queryParams: Params) => {
        this.allowEdit = queryParams['allowEdit'] === '1' ? true : false;
      }
    );                 
    this.route.fragment.subscribe();                 
    const id = +this.route.snapshot.params['id'];
    this.server = this.serversService.getServer(id);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
    this.changesSaved = true;
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean{
    if(!this.allowEdit){
      return true;
    } 
    if((this.serverName !== this.server.name || this.serverStatus !== this.server.status) && !this.changesSaved) {
      return confirm('Do you want to discard the changes?')
    }else
      return true;
  }

}
