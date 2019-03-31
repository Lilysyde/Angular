import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-angular-directive',
  templateUrl: './angular-directive.component.html',
  styleUrls: ['./angular-directive.component.css']
})
export class AngularDirectiveComponent implements OnInit {
  titre = 'Super Serie';

  isThisSerieVital:boolean = true;

  showMovies: boolean =  true;

  constructor() { }

  ngOnInit() {
  }

}
