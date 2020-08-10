import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription, Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  private obsSubscripion: Subscription;
  constructor() { }

  ngOnInit() {
    // this.obsSubscripion = interval(1000).subscribe(
    //   count => {
    //     console.log(count);
    //   }
    // );

    const customeInterval = Observable.create((observer) => {
      let count = 0;
      setInterval(() => {
        observer.next(count)
        count++;
        if(count == 5){ observer.complete();}
        if(count === 6){
          observer.error('Oops! the counter is up to 3...')
        }
      }, 1000);
    });
    /** it can take 3 paramters 
     * 1-the method to process
     * 2- the error
     * 3- the complete subscribtion  */
    /** it can handel error in subscription */

    /** the filter() and map() are called operators from rxjs */
    this.obsSubscripion = customeInterval.pipe(
      filter(data => { return data > 0})
      ,map((data: number) => { return 'Round ' + (data + 1)}))
      .subscribe(data => {
      console.log(data);
    }, error => {console.log( error)},
       () => {console.log('completed!')}
    
    );
  }

  /** we need destroy method because observable is running all of the time for the program is running */
  ngOnDestroy(){
    this.obsSubscripion.unsubscribe();
  }
}
