import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { InitialComponent } from './pages/initial/initial.component';
import { FormTeacherComponent } from './components/content/content-login/content-form/form-teacher/form-teacher.component';
import { FormStudentComponent } from './components/content/content-login/content-form/form-student/form-student.component';
import { AuthenticationGuard } from './components/content/content-login/services/authentication.guard';
import { EntryTcComponent } from './pages/entry-tc/entry-tc.component';
import { EntryStdComponent } from './pages/entry-std/entry-std.component';
import { ContentHomeComponent } from './components/content/content-home/content-home.component';
import { PainelComponent } from './components/content/painel/painel.component';

const routes: Routes = [
  {
    path: "",
    component: InitialComponent,
  },
  
  {
    path: "Entry-Teacher-page", 
    component: EntryTcComponent,
    children : [],
    canActivate : [AuthenticationGuard]
  },
  {
  path: "Entry-Student-page", 
  component: EntryStdComponent ,
  children : [
    {path:"Home", component: ContentHomeComponent},
    {path:"Painel", component: PainelComponent },
    { path: '', redirectTo: 'Home', pathMatch: 'full' },
  ],
  canActivate : [AuthenticationGuard]
  },
  {
    path: "login-page",
    component: LoginComponent,
    children : [
      {path:"", component: FormStudentComponent},
      {path:'Form-teacher', component: FormTeacherComponent}
    ]
 
  },
  {
    path: "register-page",
    component: RegisterComponent,

  },

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }