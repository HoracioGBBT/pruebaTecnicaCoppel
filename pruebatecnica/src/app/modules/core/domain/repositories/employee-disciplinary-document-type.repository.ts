import { EmployeeDisciplinaryDocumentType } from "../models/employee-disciplinary-document-type";



export abstract class EmployeeDisciplinaryDocumentTypeRepository {
    abstract getEmployeeDisciplinaryDocumentType(params: any): Promise<any>;
    abstract getEmployeeDisciplinaryDocumentTypeByPK(idEmployee: number): Promise<EmployeeDisciplinaryDocumentType>;
}