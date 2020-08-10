export class LoggingService{
    logStatusChanged(status: string){
        console.log('A server service status changed, new status: ' + status);
    }
}