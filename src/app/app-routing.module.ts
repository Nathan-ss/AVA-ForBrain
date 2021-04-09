import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { InitialComponent } from './pages/initial/initial.component';

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
  component:RegisterComponent,
  
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
