import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormsModule, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';



@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.scss']
})
export class RecoverPasswordComponent implements OnInit {
  email : '';

  constructor( private snackBar: MatSnackBar,) { }

  ngOnInit(): void {

  }

  showMensage(form){
    console.log(form)

    try {
      
        this.snackBar.open("Email enviado", 'X', {
          duration:2000,
          horizontalPosition:'right' ,
          verticalPosition: 'top',
        });
      

    } catch (error) {
      this.snackBar.open("Email invalido", 'X', {
        duration:2000,
        horizontalPosition:'right' ,
        verticalPosition: 'top',
      });
    }

  }

}
