import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-content-login',
  templateUrl: './content-login.component.html',
  styleUrls: ['./content-login.component.scss']
})
export class ContentLoginComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  goFormAluno() {
    this.router.navigate(['/']);
}

}
