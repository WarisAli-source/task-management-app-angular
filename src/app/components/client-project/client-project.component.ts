import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ClientService } from '../../services/client.service';
import { ClientProjects, Employee, IResponseModel } from '../../model/interface/role';
import { HttpErrorResponse } from '@angular/common/http';
import { IClient } from '../../model/interface/client';
import $ from 'jquery';
import { CommonModule, DatePipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-client-project',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,UpperCasePipe,DatePipe],
  templateUrl: './client-project.component.html',
  styleUrl: './client-project.component.css'
})
export class ClientProjectComponent implements OnInit{
  currentDate :Date = new Date();
  clientService = inject(ClientService);
  employeeList: Employee []= [];
  clientList : IClient [] = []; 
  clientProjectList : ClientProjects[] =[];

  ngOnInit(): void {
    this.loadAllClient();
    this.loadAllEmployees();
    this.loadAllClientProjects();
  }
  loadAllClient(){
    this.clientService.getAllClients().subscribe(
      (resp: IResponseModel) => {
        this.clientList = resp.data;
      },
      (error: HttpErrorResponse) => { 
        console.log("Error fetching clients", error);
      }
    );
  }
  loadAllClientProjects(){
    this.clientService.getAllClientProjects().subscribe(
      (resp: IResponseModel) => {
        this.clientProjectList = resp.data;
      },
      (error: HttpErrorResponse) => { 
        console.log("Error fetching clients", error);
      }
    );
  }
  loadAllEmployees(){
    this.clientService.getAllEmployees().subscribe(
      (resp: IResponseModel) => {
        this.employeeList = resp.data;
      },
      (error: HttpErrorResponse) => { 
        console.log("Error fetching clients", error);
      }
    );
  }

  projectForm:FormGroup = new FormGroup({
    clientProjectId: new FormControl(0, Validators.required),
    projectName: new FormControl('', Validators.required),
    startDate: new FormControl('', Validators.required),
    expectedEndDate: new FormControl('', Validators.required),
    leadByEmpId: new FormControl(0, Validators.required),
    completedDate: new FormControl(''),
    contactPerson: new FormControl('', Validators.required),
    contactPersonContactNo: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{10}$')]),
    totalEmpWorking: new FormControl(0, Validators.required),
    projectCost: new FormControl(0, Validators.required),
    projectDetails: new FormControl('', Validators.required),
    contactPersonEmailId: new FormControl('', [Validators.required, Validators.email]),
    clientId: new FormControl(0, Validators.required),
  });

  onSaveProject() {
    const formValue = this.projectForm.value;
    debugger;
    this.clientService.addUpdateClientProject(formValue).subscribe((resp :IResponseModel) =>{
      if(resp.result){
        alert("Client Project Created...");
      }
    })
    $('.btn-close').click();
    this.loadAllClientProjects();
  }
}
