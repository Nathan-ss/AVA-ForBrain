import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-content-login',
  templateUrl: './content-login.component.html',
  styleUrls: ['./content-login.component.scss'],
})
export class ContentLoginComponent implements OnInit {
  titulo: string = "login aluno";
  colorStudent: string = "white";
  colorTeacher: string = "#0f41b4";
  actStudent: boolean = true;
  actTeacher: boolean = null;

  changeStudent(){
    this.titulo =  "login aluno";
    document.getElementById("btn-student").style.background = "#ffff";
    document.getElementById("btn-student").style.color = "black";
    document.getElementById("btn-teacher").style.background = "#0f41b4";
    document.getElementById("btn-teacher").style.color = "#ffff";
    this.colorTeacher = "#0f41b4";
    this.colorStudent = "#ffff";
    this.actStudent =  true;
    this.actTeacher = false;
    
  }
  changeTeacher(){
    this.titulo =  "login professor";
    document.getElementById("btn-student").style.background = "#0f41b4";
    document.getElementById("btn-student").style.color = "#ffff";
    document.getElementById("btn-teacher").style.background = "#ffff";
    document.getElementById("btn-teacher").style.color = "black";
    this.actStudent = false;
    this.actTeacher =  true;

    
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
