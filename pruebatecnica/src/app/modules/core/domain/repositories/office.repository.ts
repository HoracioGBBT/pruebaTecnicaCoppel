import { Office } from "../models/office";

export abstract class OfficeRepository{
    abstract getOffices(params: any): Promise<any>;
    abstract createOffice(office: Office): Promise<Office>;
    abstract getOfficeByPK(idOffice: number): Promise<Office>;
    abstract disableOffice(idOffice: number): Promise<Office>;
    abstract enableOffice(idOffice: number): Promise<Office>;
    abstract deleteOffice(idOffice: number): Promise<Office>;
    abstract updateOffice(idOffice: number, office: Office): Promise<Office>;
}