import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee } from './emp/model/emp';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class EmpService {
  baseUrl = environment.baseUrl;
  constructor(private http:HttpClient) { }

  getEmployees(){
   
    return this.http.get<Employee[]>(`http://localhost:8080/emp`);
  }

  login(username,password){
    return this.http.post<any>(`${this.baseUrl}authenticate`,{
      "username":username,
      "password":password
    })
  }
  
}
