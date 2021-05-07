import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { Register } from 'src/app/models/Register';
import { PaymentService } from 'src/app/services/payment.service';
import { initialState } from 'src/app/state/register.state';

@Component({
  selector: 'app-stattrial',
  templateUrl: './stattrial.component.html',
  styleUrls: ['./stattrial.component.css']
})
export class StattrialComponent implements OnInit {

  constructor(private toastr : ToastrService, private paymentService : PaymentService,private store : Store<{reg : { register:Register}}>) { }

  ngOnInit(): void {

  }

  trialForm : FormGroup = new FormGroup({

    'firstname': new FormControl(null, Validators.required),
    'lastname': new FormControl(null, Validators.required),
    'workemail': new FormControl(null, [ Validators.required, Validators.email]),
    'country': new FormControl(null),
    'budjet': new FormControl(null, Validators.required),
    'telephone': new FormControl(null,[Validators.required])
    

  });

  submitTrial(){

    if(this.trialForm.status == "INVALID"){

      this.toastr.error("Invalid Input ");
      return ;
    }
   
   
    this.paymentService.registerUser(this.trialForm);
    console.log("cheching");
     this.store.select('reg').subscribe(data => {
       console.log(data.register);
       
    this.toastr.success("Budjet Added ");
     
       
     });
  }


}
