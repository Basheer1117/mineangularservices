import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Useer } from './useer';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http:HttpClient) {

   }
  gettodaysdate(){
    let date = new Date();
    return date;
  }
  getmyName(){
    return 'basheer';
  }
  getuserdetails():Observable<Useer[]>{
   return this.http.get<Useer[]>("http://jsonplaceholder.typicode.com/users")
  }
}
