import { EmployeeDossier } from "../models/employee-dossier";

export abstract class EmployeeDossierRepository {

    abstract getUrlFile(keyFile: string): Promise<any>;
    abstract uploadFile(file: any): Promise<any>;

    abstract getByEmployeePk(idEmployee: number): Promise<any>;
}