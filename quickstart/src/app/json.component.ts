import { Component, OnInit, Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Component({
  selector: 'app-json',
  templateUrl: './json.component.html',
  styles: []
})

@Injectable()
export class jsonComponent implements OnInit {

testResponse: any;
results: any; 
  // Inject HttpClient into your component or service.
  constructor(private http: Http) {}
 
  ngOnInit(): void {
   
 
   this.http.get('/app/item.json').subscribe(
        data => {
          this.results = data;
          console.log("I CANT SEE DATA HERE: ", this.testResponse);
        }
    );
 
  
  }

}