import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { catchError } from 'rxjs/operators';

import {HttpClient} from '@angular/common/http';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskManagerServiceService {

  constructor(private _http : Http) 
  {
      
  } 
  GetTask(id : number) : Observable<Task>
  {
    console.log(id);
      return this._http.get("http://localhost/TaskManager.WebAPI/api/GetTask" +"/"+ id)
      .map((response : Response)=><Task> response.json());
  }

  GetAllTasks() : Observable<Task[]>
  {
      return this._http.get("http://localhost/TaskManager.WebAPI/api/GetAllTasks")
      .map((response : Response)=><Task[]> response.json());
  }

  InsertData(task : Task) : Observable<string>
  {
     return this._http.post("http://localhost/TaskManager.WebAPI/api/AddTask",task)
     .map((response : Response)=><string> response.json());
  }

  UpdateData(_task : Task) : Observable<string>
  {
    return this._http.put("http://localhost/TaskManager.WebAPI/api/UpdateTask" ,_task)
    .map((response : Response)=> <string> response.json());
  }

  DeleteData(_taskID : number) : Observable<string>
  {
    return this._http.delete("http://localhost/TaskManager.WebAPI/api/DeleteTask" +"/" + _taskID )
    .map((response : Response)=> <string> response.json());
  }
}
