import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-form-teacher',
  templateUrl: './form-teacher.component.html',
  styleUrls: ['./form-teacher.component.scss']
})
export class FormTeacherComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  goHomePage() {
    this.router.navigate(['/Home-page']);
}
}
