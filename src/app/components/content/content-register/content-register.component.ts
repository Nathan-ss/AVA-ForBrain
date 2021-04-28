import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-register',
  templateUrl: './content-register.component.html',
  styleUrls: ['./content-register.component.scss']
})
export class ContentRegisterComponent implements OnInit {
  selectDate: number ;

  days = [
      { id: 1, name: 'Volvo' },
      { id: 2, name: 'Saab' },
      { id: 3, name: 'Opel' },
      { id: 4, name: 'Audi' },
  ];

  constructor() { }

  ngOnInit(): void {

  }

}
