import { Component, OnInit, } from '@angular/core';

@Component({
  selector: 'app-entry-std',
  templateUrl: './entry-std.component.html',
  styleUrls: ['./entry-std.component.scss']
})
export class EntryStdComponent implements OnInit {
  actbtn : boolean = true;
  pagename: string = "Home";
  
  
  constructor() { }

  ngOnInit(): void {
  }

  
  submitname(name){
    this.pagename = name;

  }

  action (value){
    this.actbtn = value;
  }

}
