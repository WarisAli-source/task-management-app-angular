export interface IRole {
    roleId :number,
    role:string
}

export interface IResponseModel {
    message :string,
    result:boolean,
    data:any
}

export interface Employee {
    empName: string,
    empId: number,
    empCode: string,
    empEmailId: string,
    empDesignation:string,
    role:string
}
export interface ClientProjects {
    empName: string;
    empId: number;
    empCode: string;
    empEmailId: string;
    empDesignation: string;
    projectName: string;
    startDate: string; // ISO format date string
    expectedEndDate: string; // ISO format date string
    clientName: string;
    clientProjectId: number;
  }
  