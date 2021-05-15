import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})


export class HeaderComponent implements OnInit {
  selectedCurso: number;

  public Itenscursos = [
      { id: 1, name: 'Segurança' },
      { id: 2, name: 'Marketing' },
      { id: 3, name: 'Digitação' },
      { id: 4, name: 'Inglês' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
