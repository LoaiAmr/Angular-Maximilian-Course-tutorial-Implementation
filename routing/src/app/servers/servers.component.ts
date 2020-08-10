import { Component, OnInit } from '@angular/core';
import { ServersService } from './server.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  public servers: {id: number, name: string, status: string}[] = [];

  constructor(private serversService: ServersService,
              private router: Router,
              private rout: ActivatedRoute) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  onReloadPage(){
    // this.router.navigate(['servers'], {relativeTo: this.rout} );
  }

}