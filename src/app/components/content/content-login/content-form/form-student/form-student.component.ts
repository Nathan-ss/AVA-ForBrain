import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AccountService } from '../../services/account.service';
import { FormsModule, FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServicesAvaForBrain } from '../../../global-rest-api/Api-services';
import { Login, Usuarios } from '../../../entities/Entities';




@Component({
  selector: 'app-form-student',
  templateUrl: './form-student.component.html',
  styleUrls: ['./form-student.component.scss']
})
export class FormStudentComponent implements OnInit {
 
  msg_success: string = 'Login efetuado com sucesso'; 
  FormLoginUser:FormGroup;
  valid:false
  
  login = {
    dataUser:'',
    password:''
  }
  
  constructor(  
    private FormBuild:FormBuilder,
    private Services: ServicesAvaForBrain,
    private accountService : AccountService,
    private router: Router, 
    private snackBar: MatSnackBar,
    
    ) { }

  ngOnInit(){
    this.creatForm();

  }

  creatForm(){
    this.FormLoginUser=this.FormBuild.group({
      usename:['',Validators.required],
      password:['',Validators.required]
    })
  }
  
 Valid():boolean{
   if(this.FormLoginUser.invalid){
     return false;
   }
   else{
     return true;
   }
 }


   onSubmit(form: any=null){
    
   this.Services.GetAllUsuarios().subscribe(response=>{
     const listUsarios= response.Usarios as Usuarios[]
     console.log('user: ', listUsarios)
     
     const userModel = listUsarios.find(x=>x.name===this.FormLoginUser.value.usename &&x.password===this.FormLoginUser.value.password && x.perfil==='Aluno');
  
     if(userModel!==undefined&& userModel!==null){
        console.log('userModel: ', userModel)
         //this.router.navigate(['Entry-Student-page/Home'])
        
       }
       else{
         console.log('usuario não encontrado')
       }
    })
  }
}
