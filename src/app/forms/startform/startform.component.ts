import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-startform',
  templateUrl: './startform.component.html',
  styleUrls: ['./startform.component.css']
})
export class StartformComponent implements OnInit {

  constructor(private route : Router) { }

  ngOnInit(): void {
  }


  changeRoute(){

    this.route.navigateByUrl("/trial");
  }

}
