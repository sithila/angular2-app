import { Component, OnInit, Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Comment }           from '../model/comment';
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

results: string[];
 
  // Inject HttpClient into your component or service.
  constructor(private http: Http) {}
 
  ngOnInit(): void {
   
  this.http.get<results>('/app/item.json', {observe: 'response'})
  .subscribe(resp => {
    console.log(resp);
  });
 
  
  }

}