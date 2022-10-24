import { DOCUMENT } from '@angular/common';
import { ThisReceiver } from '@angular/compiler';
import { Component, Inject, inject, OnInit } from '@angular/core';
import { TestService } from '../test.service';
import { Useer } from '../useer';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  a:string = 'HomeComponent';
b='no datatype';
status = false;
d = 123;

name1 = 'basheer';
name2 = 'shaheed';
todaydate = new Date();
money = 10000;
performance = 2;
mobiles =['redmi','iphone','samsung']


 constructor(@Inject(DOCUMENT) document:Document,private testser:TestService){
  this.document = document
 }
 document:any;
name:undefined;
User:Useer[]=[];
  ngOnInit(): void {
   // alert('hai this is form homecomponent')
   alert(this.testser.gettodaysdate());
  }
printdata(event:any){
alert(this.name);
alert(this.document.getElementById('name').value)
}
data(){
  alert(this.testser.getmyName());
}

getallusers(){
  this.testser.getuserdetails().subscribe(x=>{
    this.User = x;
 } )
}
}