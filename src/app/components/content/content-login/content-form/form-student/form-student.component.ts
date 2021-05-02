import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../../services/account.service';



@Component({
  selector: 'app-form-student',
  templateUrl: './form-student.component.html',
  styleUrls: ['./form-student.component.scss']
})
export class FormStudentComponent implements OnInit {
  durationInSeconds = 5;
  login = {
    user:'',
    password:''
  }
  constructor(  
    private accountService : AccountService,
    private router: Router, 
    ) { }

  ngOnInit(): void {
  }


  async onSubmit(){
    try {
      const result = await this.accountService.login(this.login);
      console.log(`login efetuado com sucesso: ${result}`);
      this.router.navigate(['/Home-page']);
    } catch (error) {
      
    }
  }
}
