import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AddComponent } from './UI/add/add.component';
import { UpdateComponent } from './UI/update/update.component';
import { ViewComponent } from './UI/view/view.component';

import { TaskManagerServiceService } from './Service/task-manager-service.service';

const appRoutes : Routes = [
  { path : 'Add' , component : AddComponent } ,
  { path : 'Update/:id' , component :UpdateComponent } ,
  { path : 'View' , component : ViewComponent }   
];

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    UpdateComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule ,FormsModule , HttpModule , RouterModule.forRoot(appRoutes)
  ],
  providers: [TaskManagerServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
