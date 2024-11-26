import { EmployeePositionLog } from "../models/employee-position-log";

export abstract class EmployeePositionLogRepository {
    abstract getEmployeePositionLogs(params: any): Promise<any>;
    abstract getEmployeePositionLogByPK(idEmployeePositionLog: number): Promise<EmployeePositionLog>;
    abstract getEmployeePositionLogsByEmployeeId(idEmployee: number): Promise<EmployeePositionLog[]>;
    abstract createEmployeePositionLog(employeePositionLog: EmployeePositionLog): Promise<EmployeePositionLog>;
}
