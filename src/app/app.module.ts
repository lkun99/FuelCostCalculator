import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FuelWearComponent } from './components/forms/fuel-wear/fuel-wear.component';
import { FuelPriceComponent } from './components/forms/fuel-price/fuel-price.component';
import { DistanceComponent } from './components/forms/distance/distance.component';
import { FormsComponent } from './components/containers/forms/forms.component';
import { ResultComponent } from './components/forms/result/result.component';
import {FooterComponent} from './components/layout/footer/footer.component';
import { BarsComponent } from './components/forms/bars/bars.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FuelWearComponent,
    FuelPriceComponent,
    DistanceComponent,
    FormsComponent,
    ResultComponent,
    FooterComponent,
    BarsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
