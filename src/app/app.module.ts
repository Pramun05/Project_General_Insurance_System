import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { insuranceService } from './insurance/service/insurance.service';
import { HttpClientModule,HttpClient } from '@angular/common/http';

import { HomePageComponent } from './home-page/home-page.component';
import { insuranceclaimsService } from './insurance/service/insurance-claims.service';
import { InsuranceClaimsComponent } from './insurance-claims/insurance-claims.component';

@NgModule({
  declarations: [
    AppComponent,
    InsuranceComponent,
    
    HomePageComponent,
         InsuranceClaimsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [insuranceService,insuranceclaimsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
