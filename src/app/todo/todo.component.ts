import { Component } from '@angular/core';
import { TodoService } from '../todo.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StatusPipe } from '../status.pipe';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [FormsModule, CommonModule, StatusPipe],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {
  tasks:any=[];
  newtask:string ='';
  filterBy: string = 'all';
  constructor(private todoService : TodoService){
    this.tasks= this.todoService.getTasks()
  }

  addNewTask(){
    this.todoService.addTasks(this.newtask)
    this.newtask="";
  }
  
  toggleTask(id:number){
  this.todoService.toggletask(id)
  }

  deleteTask(id:number){
   this.tasks = this.todoService.deleteTasks(id);
  }
  
  

}
