import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { IDesignation } from '../../model/interface/designations';
import { CommonModule } from '@angular/common';
import { MasterService } from '../../services/master.service';
import { IResponseModel } from '../../model/interface/role';

@Component({
  selector: 'app-designation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './designation.component.html',
  styleUrl: './designation.component.css'
})
export class DesignationComponent implements OnInit {
  designationist : IDesignation [] = [];
  isLoading : boolean = true;
  http = inject(HttpClient)
  masterService = inject(MasterService)
  ngOnInit(): void {
    this.masterService.getDesignation().subscribe((resp : IResponseModel) => {
      this.designationist = resp.data;
      this.isLoading=false;
    },error =>{
      console.log("Error");
      this.isLoading=false;
    });
  }
 
}
