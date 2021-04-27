import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { InitialComponent } from './pages/initial/initial.component';
import { FormTeacherComponent } from './components/content/content-login/content-form/form-teacher/form-teacher.component';
import { FormStudentComponent } from './components/content/content-login/content-form/form-student/form-student.component';

const routes: Routes = [
  {
    path: "",
    component: InitialComponent,
  },
  {
    path: "pages/login",
    component: LoginComponent,
  },
  {
    path: "pages/register",
    component: RegisterComponent,

  },
  {
    path: "form-Student", 
    component: FormStudentComponent,
  },
  {
    path: "form-Teacher", 
    component: FormTeacherComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }