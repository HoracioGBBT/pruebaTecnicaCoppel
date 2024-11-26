import { SalaryTabulator } from "../models/salary-tabulator";

export abstract class SalaryTabulatorRepository{
    abstract getSalaryTabulators(params: any): Promise<any>;
    abstract createSalaryTabulator(SalaryTabulator: SalaryTabulator): Promise<SalaryTabulator>;
    abstract getSalaryTabulatorByPK(idSalaryTabulator: number): Promise<SalaryTabulator>;
    abstract disableSalaryTabulator(idSalaryTabulator: number): Promise<SalaryTabulator>;
    abstract enableSalaryTabulator(idSalaryTabulator: number): Promise<SalaryTabulator>;
    abstract deleteSalaryTabulator(idSalaryTabulator: number): Promise<SalaryTabulator>;
    abstract updateSalaryTabulator(idSalaryTabulator: number, salaryTabulator: SalaryTabulator): Promise<SalaryTabulator>;
}