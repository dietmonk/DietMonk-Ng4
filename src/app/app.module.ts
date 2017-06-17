import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ListingProductCardComponent } from './listing-product-card/listing-product-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    ListingProductCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
