import { EmployeeLog } from "../models/employee-log";


export abstract class EmployeeLogRepository {
    abstract getEmployeeLogs(params: any): Promise<any>;
    abstract getEmployeeLogByPK(idEmployeeLog: number): Promise<EmployeeLog>;
    abstract createEmployeeLog(employeeLog: EmployeeLog): Promise<EmployeeLog>;
    abstract getEmployeeLogsByEmployeeId(idEmployee: number): Promise<EmployeeLog[]>
}
