import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import {Routes , RouterModule } from '@angular/router'
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BasicHighlightDirevtive } from './basic-highlight/basic.highlight.directive';
import { BetterHighlightDirective } from './better-highlight/better-highlight.directive';
import { UnlessDirective } from './unless.directive';


@NgModule({
  declarations: [
    AppComponent,
    BasicHighlightDirevtive,
    BetterHighlightDirective,
    UnlessDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
   
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
