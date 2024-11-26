import { Vacancy } from "../models/vacancy";

export abstract class VacancyRepository {
    abstract getVacancies(params: any): Promise<any>;
    abstract createVacancy(vacancy: Vacancy): Promise<Vacancy>;
    abstract getVacancyByPK(idVacancy: number): Promise<Vacancy>;
    abstract disableVacancy(idVacancy: number): Promise<Vacancy>;
    abstract enableVacancy(idVacancy: number): Promise<Vacancy>;
    abstract deleteVacancy(idVacancy: number): Promise<Vacancy>;
    abstract updateVacancy(idVacancy: number, vacancy: Vacancy): Promise<Vacancy>;
    abstract getVacancyExcel(params: any): Promise<any>
    abstract getDeparmentsByTemplate(params: any): Promise<any>;
    abstract getPositionsByTemplate(params: any): Promise<any>;
    abstract getAllVacancyIndicatorTemplate(params: any): Promise<any>;
    abstract getVacancyIndicatorTemplateExcel(params: any): Promise<any>;
    abstract getVacanciesCountData(params: any): Promise<any>;
    abstract generateVacancyIndicatorDetailTemplate(params: any): Promise<any>;
    abstract generateVacancyIndicatorDetailTemplateExcel(params: any): Promise<any>;
    abstract getVacancyEmployeeDetails(params: any): Promise<any>;
    abstract generateVacancyIndicatorDetailEmployeeExcel(params: any): Promise<any>;

}
