import { BusinessUnit } from "../models/business-unit";

export abstract class BusinessUnitRepository {
    abstract getBusinessUnits(params: any): Promise<any>;
    abstract getBusinessUnitByPK(idBusinessUnit: number): Promise<BusinessUnit>;
    abstract createBusinessUnit(businessUnit: BusinessUnit): Promise<BusinessUnit>;
    abstract updateBusinessUnit(idBusinessUnit: number, businessUnit: BusinessUnit): Promise<BusinessUnit>;
    abstract enableBusinessUnit(idBusinessUnit: number): Promise<BusinessUnit>;
    abstract disableBusinessUnit(idBusinessUnit: number): Promise<BusinessUnit>;
    abstract deleteBusinessUnit(idBusinessUnit: number): Promise<BusinessUnit>;
}