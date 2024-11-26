import { EmployeeDisciplinaryDocument } from "../models/employee-disciplinary-document";

export abstract class EmployeeDisciplinaryDocumentRepository {
    abstract createEmployeeDisciplinaryDocument(disciplinaryDocument: EmployeeDisciplinaryDocument): Promise<EmployeeDisciplinaryDocument>;
    abstract getEmployeeDisciplinaryDocuments(params: any): Promise<any>;
    abstract getEmployeeDisciplinaryDocumentCountsByEmployee(idEmployee: number): Promise<any>;
    abstract getEmployeeDisciplinaryDocumentByPK(idDocument: number): Promise<EmployeeDisciplinaryDocument>;
    abstract getByTypeEmployeeDisciplinaryDocuments(params: any): Promise<EmployeeDisciplinaryDocument[]>;

    abstract deleteEmployeeDisicplinaryDocument(idDocument: number): Promise<EmployeeDisciplinaryDocument>;
    abstract getUrlFile(keyFile: string): Promise<any>;
    abstract uploadFile(file: any): Promise<any>;

}