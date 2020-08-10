import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ShortenPipe } from './shorten.pipe';
import { FilteredStringPipe } from './pipes/filtered-string.pipe';
import { FilteringTableComponent } from './filtering-table/filtering-table.component';

@NgModule({
  declarations: [
    AppComponent,
    ShortenPipe,
    FilteredStringPipe,
    FilteringTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
