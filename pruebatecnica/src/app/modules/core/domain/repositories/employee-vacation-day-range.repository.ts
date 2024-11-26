import { EmployeeVacationDayRange } from "../models/employee-vacation-day-range";


export abstract class EmployeeVacationDayRangeRepository{
    abstract getEmployeeVacationDayRanges(params: any): Promise<any>;
    abstract createEmployeeVacationDayRange(employeeVacationDayRange: EmployeeVacationDayRange): Promise<EmployeeVacationDayRange>;
    abstract getEmployeeVacationDayRangeByPK(idEmployeeVacationDayRange: number): Promise<EmployeeVacationDayRange>;
    abstract disableEmployeeVacationDayRange(idEmployeeVacationDayRange: number): Promise<EmployeeVacationDayRange>;
    abstract enableEmployeeVacationDayRange(idEmployeeVacationDayRange: number): Promise<EmployeeVacationDayRange>;
    abstract deleteEmployeeVacationDayRange(idEmployeeVacationDayRange: number): Promise<EmployeeVacationDayRange>;
    abstract updateEmployeeVacationDayRange(idEmployeeVacationDayRange: number, employeeVacationDayRange: EmployeeVacationDayRange): Promise<EmployeeVacationDayRange>;
}