import { Component } from '@angular/core';
import { PaymentService } from './services/payment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fileApp';
  startTrial:boolean = false;



  constructor(private paymentService:PaymentService){

  }


  changeAcess(){
  

  }
}
