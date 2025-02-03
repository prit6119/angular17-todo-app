import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { StatusPipe } from '../status.pipe';
import { TodoComponent } from '../todo/todo.component';
import { TodoService } from '../todo.service';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [StatusPipe, TodoComponent],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    RouterModule
  ],
  providers: [TodoService],
  bootstrap: [TodoComponent]
})
export class AppModule { }
