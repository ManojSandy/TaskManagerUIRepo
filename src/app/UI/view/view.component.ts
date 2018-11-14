import { Component, OnInit } from '@angular/core';
import { Router ,ActivatedRoute } from '@angular/router';
import { Task } from '../../models/task';
import { TaskManagerServiceService } from '../../Service/task-manager-service.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  
  public _tasks : Task[];

  public _tasksList : Task[];

  private _searchTaskName : string;

  private _searchParentTaskName : string;

  private _searchPriorityFrom :number;

  private _searchPriorityTo : number;

  private _searchEnddate : Date; 

  private _searchStartDate : Date;

  get SearchTaskName() : string
  {
     return this._searchTaskName;
  }
  set SearchTaskName(value : string)
  {
    this._searchTaskName = value;
    this._tasksList = this.filteredTask(value,"TaskNameValue");
  }

  get SearchParentTaskName() : string
  {
     return this._searchParentTaskName;
  }
  set SearchParentTaskName(value : string)
  {
    this._searchParentTaskName = value;
    this._tasksList = this.filteredTask(value,"ParentTaskName");
  }

  get SearchPriorityFrom() : number
  {
     return this._searchPriorityFrom;
  }
  set SearchPriorityFrom(value : number)
  {
    this._searchPriorityFrom = value;
    this._tasksList = this.filteredTask(value,"PriorityFrom");
  }

  get SearchPriorityTo() : number
  {
     return this._searchPriorityTo;
  }
  set SearchPriorityTo(value : number)
  {
    this._searchPriorityTo = value;
    this._tasksList = this.filteredTask(value,"PriorityTo");
  }

  get SearchStartDate() : Date
  {
     return this._searchStartDate;
  }
  set SearchStartDate(value : Date)
  {
    this._searchStartDate = value;
    this._tasksList = this.filteredTask(value,"StartDate");
  }

  get SearchEndDate() : Date
  {
     return this._searchEnddate
  }
  set SearchEndDate(value : Date)
  {
    this._searchEnddate = value;
    this._tasksList = this.filteredTask(value,"EndDate");
  }

  private msg : string;
  
  constructor(private _router : Router , private _taskManager : TaskManagerServiceService ) 
  { 

  }

  ngOnInit() {
    
    this.GetAll(); 
   }

  GetAll()
  {
    this._taskManager.GetAllTasks()
    .subscribe((data : Task[]) => { this._tasks = data ,
    this._tasksList = data });
  }
   
  filteredTask(searchFilter : any , searchName : any )
  {
    if(searchName == "TaskNameValue")
    return this._tasks.filter(
      e => e.TaskName.toLowerCase().startsWith(searchFilter.toLowerCase()));

    if(searchName == "ParentTaskName")
    return this._tasks.filter(
      e => e.ParentTask.toLowerCase().startsWith(searchFilter.toLowerCase()));

    if(searchName == "PriorityFrom")
    return this._tasks.filter(
      e => e.Priority >= searchFilter);

    if(searchName == "PriorityTo")
    return this._tasks.filter(
      e => e.Priority <= searchFilter);

    if(searchName == "StartDate")
    return this._tasks.filter(
      e => e.StartDate.toString().indexOf(searchFilter) != -1);

    if(searchName == "EndDate")
    return this._tasks.filter(
      e => e.EndDate.toString().indexOf(searchFilter) != -1);
  }

  Update(_item : any)
  {
    this._router.navigate(['/Update/' + _item.TaskId]);
  }

  Delete(taskid : number)
  {
      this._taskManager.DeleteData(taskid).subscribe(i => this.msg = i);
  }

}

