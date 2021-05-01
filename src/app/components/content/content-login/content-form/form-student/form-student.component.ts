import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-student',
  templateUrl: './form-student.component.html',
  styleUrls: ['./form-student.component.scss']
})
export class FormStudentComponent implements OnInit {

  constructor( private router: Router ) { }

  ngOnInit(): void {
  }

  goHomePage() {
    this.router.navigate(['/Home-page']);
}
}
