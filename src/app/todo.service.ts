import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private tasks=[
    {id: 1, title:"study react", completed:true},
    {id: 2, title:"study Go", completed:false},
    {id: 3, title:"study Angular", completed:true},
    {id: 4, title:"study Node", completed:false}
  ]

    addTasks(title:string){
     const newTask={id:Date.now(), title, completed:false}
     this.tasks.push(newTask);
     this.getTasks();
    }

    getTasks(){
      return this.tasks;
    }

    toggletask(id:number){
    const task= this.tasks.find((t)=>t.id ===id)
    if (task) task.completed= !task.completed
    }

    deleteTasks(id:number){
     const data = this.tasks.filter((t)=> t.id!==id );
     this.tasks = data;
     return data;
    }


}
