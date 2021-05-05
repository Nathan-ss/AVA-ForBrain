import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { InitialComponent } from './pages/initial/initial.component';
import { FormTeacherComponent } from './components/content/content-login/content-form/form-teacher/form-teacher.component';
import { FormStudentComponent } from './components/content/content-login/content-form/form-student/form-student.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthenticationGuard } from './components/content/content-login/services/authentication.guard';

const routes: Routes = [
  {
    path: "",
    component: InitialComponent,
  },
  {
    path: "Home-page", 
    component: HomeComponent,
    children : [],
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