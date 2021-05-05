import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AccountService } from '../../services/account.service';



@Component({
  selector: 'app-form-student',
  templateUrl: './form-student.component.html',
  styleUrls: ['./form-student.component.scss']
})
export class FormStudentComponent implements OnInit {
 
  msg_success: string = 'Login efetuado com sucesso'; 
  
  login = {
    dataUser:'',
    password:''
  }
  constructor(  
    private accountService : AccountService,
    private router: Router, 
    private snackBar: MatSnackBar
    ) { }

  ngOnInit(): void {
  }


  async onSubmit(){
    try {
      const result = await this.accountService.login(this.login);
      console.log(`login efetuado com sucesso: ${result}`);
      this.snackBar.open(this.msg_success, 'X', {
        duration:2000,
        horizontalPosition:'right' ,
        verticalPosition: 'top',
      });
      this.router.navigate(['/Home-page']);
    } catch (error) {
      console.log(error);
    }
  }
}
