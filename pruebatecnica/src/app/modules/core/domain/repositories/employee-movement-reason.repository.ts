import { EmployeeMovementReason } from "../models/employee-movement-reason";

export abstract class EmployeeMovementReasonRepository{
    abstract getEmployeeMovementReasons(params: any): Promise<any>;
    abstract createEmployeeMovementReason(employeeMovementReason: EmployeeMovementReason): Promise<EmployeeMovementReason>;
    abstract getEmployeeMovementReasonByPK(idEmployeeMovementReason: number): Promise<EmployeeMovementReason>;
    abstract disableEmployeeMovementReason(idEmployeeMovementReason: number): Promise<EmployeeMovementReason>;
    abstract enableEmployeeMovementReason(idEmployeeMovementReason: number): Promise<EmployeeMovementReason>;
    abstract deleteEmployeeMovementReason(idEmployeeMovementReason: number): Promise<EmployeeMovementReason>;
    abstract updateEmployeeMovementReason(idEmployeeMovementReason: number, bank: EmployeeMovementReason): Promise<EmployeeMovementReason>;
}