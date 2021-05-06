import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { MatToolbarModule     } from '@angular/material/toolbar';
import { MatSidenavModule     } from '@angular/material/sidenav';
import { MatStepperModule     } from '@angular/material/stepper';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatListModule        } from '@angular/material/list';
import { MatFormFieldModule   } from '@angular/material/form-field';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatSnackBarModule} from '@angular/material/snack-bar';


import { InitialComponent } from './pages/initial/initial.component';
import { HeaderComponent    } from './components/header/header.component';
import { BaseboardComponent } from './components/baseboard/baseboard.component';
import { LoginComponent     } from './pages/login/login.component';
import { RegisterComponent  } from './pages/register/register.component';
import { ContentInitialComponent } from './components/content/content-initial/content-initial.component';
import { ContentRegisterComponent } from './components/content/content-register/content-register.component';
import { ContentLoginComponent } from './components/content/content-login/content-login.component';
import { FormStudentComponent } from './components/content/content-login/content-form/form-student/form-student.component';
import { FormTeacherComponent } from './components/content/content-login/content-form/form-teacher/form-teacher.component';
import { ContentHomeComponent } from './components/content/content-home/content-home.component';
import { EntryStdComponent } from './pages/entry-std/entry-std.component';
import { EntryTcComponent } from './pages/entry-tc/entry-tc.component';
import { PainelComponent } from './components/content/painel/painel.component';

@NgModule({
  declarations: [
    AppComponent,
    InitialComponent,
    HeaderComponent,
    BaseboardComponent,
    LoginComponent,
    RegisterComponent,
    ContentInitialComponent,
    ContentRegisterComponent,
    ContentLoginComponent,
    FormStudentComponent,
    FormTeacherComponent,
    ContentHomeComponent,
    EntryStdComponent,
    EntryTcComponent,
    PainelComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatProgressBarModule,
    MatStepperModule,
    MatFormFieldModule,
    ReactiveFormsModule, 
    FormsModule,
    NgSelectModule,
    FlexLayoutModule,
    MatSnackBarModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
