import { Component ,inject, OnInit} from '@angular/core';
import { IClient } from '../../model/interface/client';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IResponseModel } from '../../model/interface/role';
import { ClientService } from '../../services/client.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Client } from '../../model/class/Client';
import bootstrap from 'bootstrap';
import $, { error } from 'jquery';


@Component({
  selector: 'app-client',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent implements OnInit{
  client :Client = new Client();
  clientList : IClient [] = [];
  isLoading :boolean = true;
  http = inject(HttpClient)
  clientService = inject(ClientService)
  ngOnInit(): void {
    this.loadAllClient();
    
  }
  loadAllClient(){
    this.clientService.getAllClients().subscribe(
      (resp: IResponseModel) => {
        this.clientList = resp.data;
        this.isLoading = false;
      },
      (error: HttpErrorResponse) => { 
        console.log("Error fetching clients", error);
        this.isLoading = false;
      }
    );
  }
  resetClient(){
    this.client = {
      clientId:0,
      contactPersonName: '',
      companyName: '',
      contactNo: '',
      gstNo: '',
      address: '',
      city: '',
      pincode: '',
      state: '',
      employeeStrength: 0,
      regNo: ''
    };
  }

  onSubmit(): void {
    this.clientService.addUpdateClient(this.client).subscribe((resp:IResponseModel) =>{
      if(resp.result){
        alert("Client Created...");
      }
    },error => console.log("Error"))
   
    $('.btn-close').click();

    this.loadAllClient();
    this.resetClient();
  }
  deleteClient (id:number){
    this.clientService.deleteClientById(id).subscribe((resp:IResponseModel) =>{
      if(resp.result){
        alert('Client Deleted Successfully');
      }
      this.loadAllClient();

    },error => console.log('Error'))

  }
  openEditPopup(client: Client): void {
    this.client = client;
  }
}
