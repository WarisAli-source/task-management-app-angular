import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IResponseModel } from '../model/interface/role';

@Injectable({
  providedIn: 'root'
})
export class MasterService {


  constructor(private http :HttpClient) { }
  getDesignation():Observable<IResponseModel>{
    return this.http.get<IResponseModel>("https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllDesignation");
  }
}
