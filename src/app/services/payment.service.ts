import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { registerUser } from '../actions/register.action';
import { Register } from '../models/Register';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  registerDetail!:Register;

  constructor(private store : Store<{reg : { register:Register}}> ) { }

  registerUser (detail :FormGroup){
    // this.registerDetail.budjet = "bookjjj";
    // this.registerDetail.country = "nig";
    // this.registerDetail.email = "mykel";
    // this.registerDetail.firstname ="k";
    // this.registerDetail.lastname ="h";
    // this.registerDetail.phone = 86;

    console.log(detail);
    
   // console.log(this.registerDetail);
    this.store.dispatch(registerUser({ value :detail.value}));
  }

}
