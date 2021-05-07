import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartformComponent } from './forms/startform/startform.component';
import { StattrialComponent } from './forms/stattrial/stattrial.component';
import { HomeComponent } from './Home/home/home.component';
import { registerReducer } from './reducer/registerReducer';
import { TrialComponent } from './trial/trial.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';



@NgModule({
  declarations: [
    AppComponent,
    StartformComponent,
    StattrialComponent,
    HomeComponent,
    TrialComponent
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot({reg : registerReducer}),
    BrowserAnimationsModule,
    ToastrModule.forRoot()    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
