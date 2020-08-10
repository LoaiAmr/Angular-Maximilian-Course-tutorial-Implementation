import { Component, EventEmitter, Output } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers: [LoggingService]
})
export class NewAccountComponent {
 

  constructor(private logginService: LoggingService,
              private accountsService: AccountsService){
                this.accountsService.statusUpdated.subscribe(
                  (status: string) => alert('New Status is: (' + status + ')')
                );
              }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccount(accountName, accountStatus);
    // we instead of that by dependency injection in angular
    // const service = new LoggingService();
    // service.logStatusChanged(accountStatus);
    
    // this.logginService.logStatusChanged(accountStatus);
  }
}

