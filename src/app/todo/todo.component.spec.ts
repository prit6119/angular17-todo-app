import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TodoComponent } from './todo.component';
import { TodoService } from '../todo.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { StatusPipe } from '../status.pipe';

describe('TodoComponent', () => {
  let component: TodoComponent;
  let fixture: ComponentFixture<TodoComponent>;
  let todoService: jasmine.SpyObj<TodoService>;

  beforeEach(async () => {
    const todoServiceMock = jasmine.createSpyObj('TodoService', ['getTasks', 'addTasks', 'toggletask', 'deleteTasks']);

    await TestBed.configureTestingModule({
      imports: [FormsModule, CommonModule, TodoComponent, StatusPipe], // ✅ Corrected imports
      providers: [{ provide: TodoService, useValue: todoServiceMock }] // ✅ Mock Service
    }).compileComponents();

    fixture = TestBed.createComponent(TodoComponent);
    component = fixture.componentInstance;
    todoService = TestBed.inject(TodoService) as jasmine.SpyObj<TodoService>;

    todoService.getTasks.and.returnValue([
      { id: 1, title: 'Learn Angular', completed: false },
      { id: 2, title: 'Write Unit Tests', completed: true }
    ]);
    
    component.tasks = todoService.getTasks();
    fixture.detectChanges();
  });

 

  it('should initialize with tasks from service', () => {
    expect(component.tasks.length).toBe(2);
    expect(component.tasks[0].title).toBe('Learn Angular');
  });

  it('should add a new task', () => {
    const newTask = 'Test Task';
    component.newtask = newTask;
    todoService.addTasks.and.callFake((title: string) => {
      component.tasks.push({ id: 3, title, completed: false });
    });

    component.addNewTask();

    expect(component.tasks.length).toBe(3);
    expect(component.tasks[2].title).toBe(newTask);
    expect(component.newtask).toBe('');
  });

  it('should toggle task status', () => {
    const taskId = 1;
    component.toggleTask(taskId);
    expect(todoService.toggletask).toHaveBeenCalledWith(taskId);
  });

  it('should delete a task', () => {
    const taskId = 2;
    todoService.deleteTasks.and.callFake((id: number) => component.tasks = component.tasks.filter(task => task.id !== id));

    component.deleteTask(taskId);

    expect(component.tasks.length).toBe(1);
    expect(component.tasks[0].id).toBe(1);
  });
 
  
  
});

