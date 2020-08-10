import { Injectable, EventEmitter } from '@angular/core';
import { LoggingService } from './logging.service';

@Injectable() //Because it inject logging service into it so must be annotated by metadata (@Injectable)
export class AccountsService{
    accounts = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Testaccount',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
      ];

      constructor(private logginService: LoggingService){}

      statusUpdated = new EventEmitter<string>();

      addAccount(name: string, status: string){
          this.accounts.push({name, status});
          this.logginService.logStatusChanged(status);
        }
        
        updateStatus(id: number, newStatus: string){
          this.accounts[id].status = newStatus;
          this.logginService.logStatusChanged(newStatus);
      }
}