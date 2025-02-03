import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status',
  standalone: true
})
export class StatusPipe implements PipeTransform {

  transform(tasks: any[], filterBy: string): any[] {
    if(!tasks) return [];
    if(filterBy==='completed') return tasks.filter((t)=>t.completed);
    if(filterBy==='pending') return tasks.filter((t)=>!t.completed)
    return tasks;
  }

}
