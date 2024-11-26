import { EmployeeVacationDay } from "../models/employee-vacation-day";

export abstract class EmployeeVacationDayRepository{
    abstract getAll( pagination: any ):Promise<any>;
    abstract save( employeeVacationDay: EmployeeVacationDay ):Promise<any>
    abstract getByPk( idEmployeeVacationDay: number ):Promise<any>;
    abstract getEmployeeVacationDaysByEmployeeId( idEmployee: number ):Promise<any>;
}