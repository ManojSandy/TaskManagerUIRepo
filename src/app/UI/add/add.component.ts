import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task';
import { TaskManagerServiceService } from '../../Service/task-manager-service.service';
import { Router } from '@angular/router';


declare var $: any;

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  item:Task;
  message : any;
 _tasks : Task[];

  constructor(private _taskService : TaskManagerServiceService ) { 
    this.item = new Task();
    this.GetParentTaskList();
  }

  ngOnInit() {
    $(document).ready(function(){
      
      $('#btnAdd').click(function() {
       
        if($("#userAddForm").valid())
        {
          return true;
        }
        else
        {
          return false;
        }  
      });
      
      });

  }
  
  GetParentTaskList()
  {
    console.log("Get Parent task called");
    this._taskService.GetAllTasks()
    .subscribe((data : Task[]) => { this._tasks = data });
    console.log("Get Parent task end");
  }

  Reset()
  {
    this.message = '';
  }

  Insert()
  {
      this._taskService.InsertData(this.item).subscribe(i => this.message = i)
      console.log(this.message);
  }
}
