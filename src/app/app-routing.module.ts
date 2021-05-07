import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './Home/home/home.component';
import { TrialComponent } from './trial/trial.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'trial', component:TrialComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
