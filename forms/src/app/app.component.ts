import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  test: number = 8;

  ngOnInit() {
  }

  onGetRate(): number{
    return 3;
  }

}
