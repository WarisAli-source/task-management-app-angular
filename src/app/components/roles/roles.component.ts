import { HttpClient } from '@angular/common/http';
import { Component,inject,OnInit } from '@angular/core';
import { IResponseModel, IRole } from '../../model/interface/role';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent implements OnInit{

  roleList : IRole [] = [];
  http = inject(HttpClient)
  ngOnInit(): void {
    this.getAllRoles();
  }
  getAllRoles(){
    this.http.get<IResponseModel>("https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllRoles").subscribe((resp:IResponseModel) =>{
      this.roleList = resp.data;
    } ,error =>{
      console.log("Error")
    })
  }
}
