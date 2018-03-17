import { Component } from '@angular/core';
import { Task } from './task';

@Component({
  selector: 'main-form',
  templateUrl: 'app/mainform.component.html',
})
export class MainFormComponent  
{  
    tasks : Array<Task>;

    constructor()
    {
        this.tasks = JSON.parse(localStorage.getItem("tasks"));

        if (this.tasks == null)
        {
            this.tasks = new Array<Task>();
        }
    }

    onInsert(): boolean
    { 
        var mainForm = <HTMLFormElement>document.getElementById("main-form");
        var currentTaskText = <HTMLInputElement>document.getElementById("current-task-text");
        var currentTaskDate = <HTMLInputElement>document.getElementById("current-task-date");

        if (!mainForm.checkValidity())
        {
            alert("Podaj prawidłowe dane!");
            return false;
        }

        var task = new Task();
        task.Title = currentTaskText.value;
        task.Deadline = new Date(currentTaskDate.value);
        task.IsDone = false;
        this.tasks.push(task);
        this.tasks.sort((a: Task, b: Task) =>
        {
            var dateA : Date = new Date(a.Deadline);
            var dateB : Date = new Date(b.Deadline);

            if (dateA < dateB) return -1;
            if (dateA > dateB) return 1;

            return 0;
        });
        localStorage.setItem("tasks", JSON.stringify(this.tasks));
        currentTaskText.value = "";
        currentTaskDate.value = "";

        return false;
    } 

    onDelete(index: number) : void
    {
        this.tasks.splice(index, 1);
        localStorage.setItem("tasks", JSON.stringify(this.tasks));
    }

    onFinish(index: number) : void
    {
        var task : Task = this.tasks[index];

        task.IsDone = true;
        localStorage.setItem("tasks", JSON.stringify(this.tasks));
    }
}
