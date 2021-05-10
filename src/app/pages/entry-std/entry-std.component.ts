import { Component, OnInit, } from '@angular/core';

@Component({
  selector: 'app-entry-std',
  templateUrl: './entry-std.component.html',
  styleUrls: ['./entry-std.component.scss']
})
export class EntryStdComponent implements OnInit {
  actbtn : boolean = true;
  pagename: string = "Home";
  elementList = <HTMLElement>document.querySelector('.sidebtn');
  
  constructor() { }

  ngOnInit(): void {
  }

  
  submitname(name){
    this.pagename = name;

  }

  select(name){
    name.prototype.toString()
    this.elementList.style.background = "#ffff";
    this.elementList.style.color = "#2875c7";
    document.getElementById(name).style.background = "#1750d1";
    document.getElementById(name).style.color = "black";
  }

  action (value){
    this.actbtn = value;
  }

}
