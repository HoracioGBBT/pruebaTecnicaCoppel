import { Department } from "../models/department";


export abstract class DepartmentRepository {
    abstract getDepartments(params: any): Promise<any>;
    abstract getDepartmentByPK(idDepartment: number): Promise<Department>;
    abstract createDepartment(department: Department): Promise<Department>;
    abstract updateDepartment(idDepartment: number, company: Department): Promise<Department>;
    abstract enableDepartment(idDepartment: number): Promise<Department>;
    abstract disableDepartment(idDepartment: number): Promise<Department>;
    abstract deleteDepartment(idDepartment: number): Promise<Department>;
}