import { BusinessName } from "../models/business-name";

export abstract class BusinessNameRepository {
    abstract getBusinessNames(params: any): Promise<any>;
    abstract getBusinessNameByPK(idBusinessName: number): Promise<BusinessName>;
    abstract createBusinessName(businessName: BusinessName): Promise<BusinessName>;
    abstract updateBusinessName(idBusinessName: number, businessName: BusinessName): Promise<BusinessName>;
    abstract enableBusinessName(idBusinessName: number): Promise<BusinessName>;
    abstract disableBusinessName(idBusinessName: number): Promise<BusinessName>;
    abstract deleteBusinessName(idBusinessName: number): Promise<BusinessName>;
}