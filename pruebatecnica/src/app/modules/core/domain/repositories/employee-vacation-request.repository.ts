
export abstract class EmployeeVacationRequestRepository{
    abstract getUrlFile(keyFile:string):Promise<any>;
    abstract uploadFile(file:any):Promise<any>;
    abstract getEmployeeVacationRequestsByEmployeeId( idEmployee: number ):Promise<any>;

}
