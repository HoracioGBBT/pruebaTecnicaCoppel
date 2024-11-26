import { Employee } from "../models/employee";
import { EmployeeId } from "../models/value-objects/employee-id";


export abstract class EmployeeRepository {
    abstract getEmployeesId(params: any): Promise<any>;
    abstract createEmployee(employee: Employee): Promise<Employee>;
    abstract deleteEmployee(idEmployee: number): Promise<Employee>;
    abstract disableEmployee(idEmployee: number, employee: Employee): Promise<Employee>;
    abstract enableEmployee(idEmployee: number, employee: Employee): Promise<Employee>;
    abstract setEmployeeToRevission(idEmployee: number, employee: Employee): Promise<Employee>;
    abstract findCurp(curp: any): Promise<any>;
    abstract getAnniversaryBirthdayReports(params: any): Promise<any>;
    abstract getByCurp(curp: any): Promise<any>;
    abstract getByPersonId(idPerson: any): Promise<any>
    abstract getEmployeeByName(params: any): Promise<Employee[]>;
    abstract getEmployeeByPK(idEmployee: number, params? : any): Promise<Employee>;
    abstract getEmployeeContractCommission(idEmployee: number): Promise<any>;
    abstract getEmployeeContractDeterminate(idEmployee: number): Promise<any>;
    abstract getEmployeeContractIndeterminate(idEmployee: number): Promise<any>;
    abstract getEmployeeDiscretionaryLetter(idEmployee: number): Promise<any>;
    abstract getEmployeeFirmDocument(idEmployee: number): Promise<any>;
    abstract getEmployeeInfonavitDiscount(idEmployee: number): Promise<any>;
    abstract getEmployeeConditionsAndBenefitsLetter(idEmployee: number): Promise<any>;
    abstract getEmployeeResume(idEmployee: number): Promise<any>;
    abstract getEmployeeRegister(idEmployee: number): Promise<any>;
    abstract getEmployeeResignationLetter(idEmployee: number): Promise<any>;
    abstract getEmployees(params: any): Promise<any>;
    abstract getListReport(params: any): Promise<any>;
    abstract rejectEmployee(idEmployee: number, employee: Employee): Promise<Employee>;
    abstract updateEmployee(idEmployee: number, employee: Employee, beforeEmployee?:Employee): Promise<Employee>;
    abstract updateImmediateEmployeeBoss(employee: Employee[]): Promise<Employee[]>;
    abstract createEmployeeExcelAnniversaryReport(params: any): Promise<any>;
    abstract createEmployeeExcelBirthdayReport(params: any): Promise<any>;
    abstract createEmployeeExcelListReport(params: any): Promise<any>;
    abstract createEmployeeExcelUpdateMovementReport(params: any): Promise<any>;
    abstract getEmployeesByRelations(params : any): Promise<any>
    abstract generateEmployeeCardsExcelListReport(params : any): Promise<any>
    abstract getUpdateMovementReport(params: any): Promise<any>;
    abstract updateProspect(idEmployee: number, employee: Employee): Promise<Employee>;

    abstract uploadPersonProfileImageFile(file: any): Promise<any>
    abstract getPersonProfileImageUrl(keyFile: any): Promise<any>
    abstract generateEmployeeVacationsExcelListReport(params : any): Promise<any>

}
