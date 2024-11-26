import { Bank } from "../models/bank";
import { EmployeeReport } from "../models/employee-report";

export abstract class EmployeeReportRepository{
    abstract getEmployeeReports(params: any): Promise<any>;
    abstract createEmployeeReport(EmployeeReport: EmployeeReport): Promise<EmployeeReport>;
    abstract getEmployeeReportByPK(idEmployeeReport: number): Promise<EmployeeReport>;
    abstract disableEmployeeReport(idEmployeeReport: number): Promise<EmployeeReport>;
    abstract enableEmployeeReport(idEmployeeReport: number): Promise<EmployeeReport>;
    abstract deleteEmployeeReport(idEmployeeReport: number): Promise<EmployeeReport>;
    abstract updateEmployeeReport(idEmployeeReport: number, employeeReport: EmployeeReport): Promise<EmployeeReport>;
}