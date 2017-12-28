import { Component } from '@angular/core';
//import {Http} from '@angular/http';
// import { map } from 'rxjs/operator/map';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myData : Array<any>;
  constructor(){
    console.log("Hello");
  }
//   constructor(private http:Http)
//   { this.http.get ('https://jsonplaceholder.typicode.com/photos')
//        .map(response => response.json())
//        .subscribe(res =>this.myData =res);
// }


}
