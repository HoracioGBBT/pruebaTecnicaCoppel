import { EmployeeMovementType } from "../models/employee-movement-type";

export abstract class EmployeeMovementTypeRepository{
    abstract getEmployeeMovementTypes(params: any): Promise<any>;
    abstract createEmployeeMovementType(employeeMovementType: EmployeeMovementType): Promise<EmployeeMovementType>;
    abstract getEmployeeMovementTypeByPK(idEmployeeMovementType: number): Promise<EmployeeMovementType>;
    abstract disableEmployeeMovementType(idEmployeeMovementType: number): Promise<EmployeeMovementType>;
    abstract enableEmployeeMovementType(idEmployeeMovementType: number): Promise<EmployeeMovementType>;
    abstract deleteEmployeeMovementType(idEmployeeMovementType: number): Promise<EmployeeMovementType>;
    abstract updateEmployeeMovementType(idEmployeeMovementType: number, bank: EmployeeMovementType): Promise<EmployeeMovementType>;
}