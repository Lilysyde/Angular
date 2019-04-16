import { Component, OnInit } from '@angular/core';
import { locateDirectiveOrProvider } from '@angular/core/src/render3/di';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
model: any ={};

  submitted = false;
 
  onSubmit() { this.submitted = true; 
    alert('SUCCESS!! :-)' + JSON.stringify(this.model))
  }
  
  constructor() { }

  ngOnInit() {
  }
  

}
