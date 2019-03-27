import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-john-doe',
  templateUrl: './john-doe.component.html',
  styleUrls: ['./john-doe.component.css']
})
export class JohnDoeComponent implements OnInit {

  User = {
    name : 'Doe',
    firstName : 'John',
    age : 25,
    quote : '',
   hidden:"true",
    photo : 'https://randomuser.me/api/portraits/lego/2.jpg'
  };
  
  constructor() { }

  ngOnInit() {
  }

}
