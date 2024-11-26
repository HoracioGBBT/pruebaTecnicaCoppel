
export abstract class PowerBIReportRepository{
    abstract getPowerBIReportUrl(params : any):Promise<any>;
}