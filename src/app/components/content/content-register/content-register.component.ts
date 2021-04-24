import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-register',
  templateUrl: './content-register.component.html',
  styleUrls: ['./content-register.component.scss']
})
export class ContentRegisterComponent implements OnInit {

  cities = [
    {id: 1, name: 'Vilnius'},
    {id: 2, name: 'Kaunas'},
    {id: 3, name: 'Pavilnys', disabled: true},
    {id: 4, name: 'Pabradė'},
    {id: 5, name: 'Klaipėda'}
];
selectedCity: any;
    selectedCityIds: string[];
    selectedCityId: number;
    selectedUserIds: number[];

  constructor() { }

  ngOnInit(): void {

  }

}
