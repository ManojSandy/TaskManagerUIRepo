import { Component, OnInit } from '@angular/core';
import { Router ,ActivatedRoute } from '@angular/router';
import { Task } from '../../models/task';
import { TaskManagerServiceService } from '../../Service/task-manager-service.service';
import { Observable } from 'rxjs';

declare var $: any;

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  item : Task;
  message : any;
  Id : number;
  _tasks : Task[];

  constructor(private _router : Router , 
              private _taskService : TaskManagerServiceService ,
              private _activatedRouter : ActivatedRoute) 
  {
      this.item = new Task();

      this._activatedRouter.params.subscribe( param => {
        this._taskService.GetTask(param['id'])
       .subscribe((data : Task) => { this.item = data })
      })

      this.GetParentTaskList();
  }

  ngOnInit() {
       
    $(document).ready(function(){
      
      $('#btnUpdate').click(function() {
       
        if($("#userUpdateForm").valid())
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
    this._taskService.GetAllTasks()
    .subscribe((data : Task[]) => { this._tasks = data });
  }

  Update()
  {
    this._taskService.UpdateData(this.item)
    .subscribe(i => this.message = i)
  }
   
  cancel()
  {
    this._router.navigateByUrl('/View');
  }
}


