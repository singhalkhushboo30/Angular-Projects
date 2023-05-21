import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../services/data/todo-data.service';

export interface ToDo{
  id:number,
  description:string,
  targetDate:Date,
  status:boolean;

}
@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  todos:ToDo[]=[];
  // todos:ToDo[]=[
  //   {id:1,description:'Discussing Day Activities',targetDate:new Date(),status:false},
  //   {id:2,description:'Emails & Organization',targetDate:new Date(),status:false},
  //   {id:3,description:'Team Meeting',targetDate:new Date(),status:false}
  // ]
  constructor(private todoDataService:TodoDataService) { }

  ngOnInit(): void {
    this.todoDataService.retrieveAllTodos('isha').subscribe(
      response=>{
        console.log(response);
        this.todos=response;
      }
    );
  }

}
