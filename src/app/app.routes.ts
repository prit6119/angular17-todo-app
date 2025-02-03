import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';

export const routes: Routes = [
    {path: '' , component: AppComponent},
    {path: 'todo', component: TodoComponent}
];
