import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddComponent } from './add.component';
import { RouterTestingModule } from '@angular/router/testing';
import { TaskManagerServiceService } from '../../Service/task-manager-service.service';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';


describe('AddComponent', () => {
  let component: AddComponent;
  let fixture: ComponentFixture<AddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddComponent ],
      imports:[RouterTestingModule,FormsModule,ReactiveFormsModule],
      providers: [TaskManagerServiceService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
