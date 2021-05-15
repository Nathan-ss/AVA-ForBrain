import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Day } from './date.model';
import { Month } from './date.model';
import { Year } from './date.model';

@Component({
  selector: 'app-content-register',
  templateUrl: './content-register.component.html',
  styleUrls: ['./content-register.component.scss']
})
export class ContentRegisterComponent implements OnInit {
  days: Day[] = [
    { id: 1, name: '1' },
    { id: 2, name: '2' },
    { id: 3, name: '3' },
    { id: 4, name: '4' },
    { id: 5, name: '5' },
    { id: 6, name: '6' },
    { id: 7, name: '7' },
    { id: 8, name: '8' },
    { id: 9, name: '9' },
    { id: 10, name: '10' },
    { id: 11, name: '11' },
    { id: 12, name: '12' },
    { id: 13, name: '13' },
    { id: 14, name: '14' },
    { id: 15, name: '15' },
    { id: 16, name: '16' },
    { id: 17, name: '17' },
    { id: 18, name: '18' },
    { id: 19, name: '19' },
    { id: 20, name: '20' },
    { id: 21, name: '21' },
    { id: 22, name: '22' },

  ]

  months: Month[] = [
    { id: 1, name: 'Janeiro' },
    { id: 2, name: 'Fevereiro' },
    { id: 3, name: 'Março' },
    { id: 4, name: 'Abril' },
    { id: 5, name: 'Maio' },
    { id: 6, name: 'Junho' },
    { id: 7, name: 'Julho' },
    { id: 8, name: 'Agosto' },
    { id: 9, name: 'Setembro' },
    { id: 10, name: 'Outubro' },
    { id: 11, name: 'Novembro' },
    { id: 12, name: 'Dezembro' },

  ]

  years: Year[] = [
    { id: 1, name: '2000' },
    { id: 2, name: '2001' },
    { id: 3, name: '2002' },
    { id: 4, name: '2003' },
    { id: 5, name: '2004' },

  ]

  constructor() { }

  ngOnInit(): void {
  }

  saveRegister(empForm:NgForm): void {
    console.log(empForm.value);
  }

}
