import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToDo } from 'src/app/data-type';
import { HelloWorldBean } from './welcome-data.service';


@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http:HttpClient) { }
  retrieveAllTodos(username: any){
    return this.http.get<ToDo[]>(`http://localhost:8082/users/${username}/todos`);
  }
}
