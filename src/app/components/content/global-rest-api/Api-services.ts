import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, delay, take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
  export class ServicesAvaForBrain {

    private readonly API = `${environment.API}`;

    constructor(private http: HttpClient) { }

    GetAllUsuarios(){
        const url=`${environment.API}/Usuarios.json`;
        var result = this.http.get<any>(url)
        return result;
    }
  }