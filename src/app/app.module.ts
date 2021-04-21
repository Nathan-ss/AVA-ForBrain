import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { MatToolbarModule     } from '@angular/material/toolbar';
import { MatSidenavModule     } from '@angular/material/sidenav';
import {MatStepperModule      } from '@angular/material/stepper';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatListModule        } from '@angular/material/list';
import {MatFormFieldModule    } from '@angular/material/form-field';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { InitialComponent } from './pages/initial/initial.component';
import { HeaderComponent    } from './components/header/header.component';
import { BaseboardComponent } from './components/baseboard/baseboard.component';

import { LoginComponent     } from './pages/login/login.component';
import { RegisterComponent  } from './pages/register/register.component';
import { ContentInitialComponent } from './components/content/content-initial/content-initial/content-initial.component';


@NgModule({
  declarations: [
    AppComponent,
    InitialComponent,
    HeaderComponent,
    BaseboardComponent,
    LoginComponent,
    RegisterComponent,
    ContentInitialComponent
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
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
