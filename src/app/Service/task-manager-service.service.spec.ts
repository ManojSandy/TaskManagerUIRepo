import { TestBed,inject } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing'
import {HttpClient} from '@angular/common/http'
import {MockBackend} from '@angular/http/testing'

import { TaskManagerServiceService } from './task-manager-service.service';
import {Task} from '../models/task';
import { HttpModule,Response } from '@angular/http';


describe('TaskManagerServiceService', () => {

  let service: TaskManagerServiceService;
  let httpMock: HttpTestingController;
  

  beforeEach(() => {
  TestBed.configureTestingModule({
    imports: [HttpClientTestingModule,HttpModule],
    providers: [TaskManagerServiceService,{provide:HttpClient,deps:MockBackend}]
  });
  service = TestBed.get(TaskManagerServiceService);
  httpMock = TestBed.get(HttpTestingController);
  });

  
  
  it('should be created', inject([TaskManagerServiceService], (service:TaskManagerServiceService) => {
    expect(service).toBeTruthy();
  }));
  
  it('Service should check with Dummy post from api via get method', ()=>{
    var date = new Date('2018-11-02');
    const dummyPost: Task[] = [
        {TaskName:'Test1',ParentTask:'',Priority:20,StartDate:date,EndDate:date,Deleted:false}
    ];

service.GetTask(9190).subscribe(post => {
  expect(post.TaskName).toBe(dummyPost.find(i=>i.TaskName == 'Test1').TaskName);

  });
  });

});
