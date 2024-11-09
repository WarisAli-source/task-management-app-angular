import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IResponseModel } from '../model/interface/role';
import { environment } from '../../environments/environment';
import { Client } from '../model/class/Client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http :HttpClient) { }
  getAllClients():Observable<IResponseModel>{
    return this.http.get<IResponseModel>(environment.API_URL_CLIENT+"GetAllClients");
  }

  getAllEmployees():Observable<IResponseModel>{
    return this.http.get<IResponseModel>(environment.API_URL_CLIENT+"GetAllEmployee");
  }

  addUpdateClient(obj :Client):Observable<IResponseModel>{
    return this.http.post<IResponseModel>(environment.API_URL_CLIENT+"AddUpdateClient",obj);
  }
  deleteClientById(id:number):Observable<IResponseModel>{
    return this.http.get<IResponseModel>(environment.API_URL_CLIENT+"GetAllClients");
  }
  addUpdateClientProject(obj :Client):Observable<IResponseModel>{
    return this.http.post<IResponseModel>(environment.API_URL_CLIENT+"AddUpdateClientProject",obj);
  }
  getAllClientProjects():Observable<IResponseModel>{
    return this.http.get<IResponseModel>(environment.API_URL_CLIENT+"GetAllClientProjects");
  }
}
