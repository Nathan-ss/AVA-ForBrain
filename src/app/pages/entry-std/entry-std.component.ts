import { Component, OnInit, } from '@angular/core'; 


@Component({
  selector: 'app-entry-std',
  templateUrl: './entry-std.component.html',
  styleUrls: ['./entry-std.component.scss']
})
export class EntryStdComponent implements OnInit {
  actbtn : boolean = true;
  pagename: string = "Home";
  
  
  constructor( ) { }

  ngOnInit(): void {
  }

  
  submitname(name){
    this.pagename = name;

  }

  select(name){
    const pages = ['home','painel'];
    //  this.elementList.style.background = "#ffff";
    //  this.elementList.style.color = "#2875c7";
    document.getElementById(name).style.backgroundColor = "#1750d1";
    document.getElementById(name).style.color = "black";
    pages.splice(pages.indexOf (name),1);
    const numberPages = pages.length;
    let n = 0;
    console.log(pages[0])

    while (n != numberPages) {
      document.getElementById(pages[n]).style.backgroundColor = "#ffff";
      document.getElementById(pages[n]).style.color = "#2875c7";
      n =+ 1;
    }

    
  }

  action (value){
    this.actbtn = value;
  }

}
