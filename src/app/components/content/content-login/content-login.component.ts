import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-content-login',
  templateUrl: './content-login.component.html',
  styleUrls: ['./content-login.component.scss'],
})
export class ContentLoginComponent implements OnInit {
  titulo: string = ' Titulo da Pagina';


  pagina1(){
    
    this.titulo = ' pagina 1';
    
  }
  pagina2(){
    this.titulo = ' pagina 2';
    
  }

  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  goFormStudent() {
    this.router.navigate(['/form-Student']);
}
  goFormTeacher() {
  this.router.navigate(['/Form-Teacher']);
  
  
}

}
