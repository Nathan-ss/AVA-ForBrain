import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Usuarios } from '../../../entities/Entities';
import { ServicesAvaForBrain } from '../../../global-rest-api/Api-services';
import { AccountService } from '../../services/account.service';


@Component({
  selector: 'app-form-teacher',
  templateUrl: './form-teacher.component.html',
  styleUrls: ['./form-teacher.component.scss']
})
export class FormTeacherComponent implements OnInit {

  msg_success: string = 'Login efetuado com sucesso'; 
  FormLoginUserProf:FormGroup;
  
  login = {
    dataUser:'',
    password:''
  }

  constructor(
    private Services: ServicesAvaForBrain,
    private FormBuild:FormBuilder,
    private accountService : AccountService,
    private router: Router, 
    private snackBar: MatSnackBar
    ) { }

  ngOnInit(){
    this.creatForm();
  }

  creatForm(){
    this.FormLoginUserProf=this.FormBuild.group({
      usename:['',Validators.required],
      password:['',Validators.required]
    })
  }
    
 Valid():boolean{
  if(this.FormLoginUserProf.invalid){
    return false;
  }
  else{
    return true;
  }
}

  
onSubmit(form: any=null){
    
  this.Services.GetAllUsuarios().subscribe(response=>{
    const listUsarios= response.Usarios as Usuarios[]
    
    const userModel = listUsarios.find(x=>x.name===this.FormLoginUserProf.value.usename &&x.password===this.FormLoginUserProf.value.password && x.perfil==='Professor');
    console.log('User: ', userModel)
    
    if(userModel!==undefined&& userModel!==null){
        this.router.navigate(['login-page/Form-teacher'])
      }
      else{
        console.log('usuario não encontrado')
      }
   })
 }
}
