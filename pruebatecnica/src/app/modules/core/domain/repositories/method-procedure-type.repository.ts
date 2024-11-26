import { MethodProcedureType } from "../models/method-procedure-type";

export abstract class MethodProcedureTypeRepository{
    abstract getMethodProcedureTypes(params: any): Promise<any>;
    abstract createMethodProcedureType(methodProcedureType: MethodProcedureType): Promise<MethodProcedureType>;
    abstract getMethodProcedureTypeByPK(idMethodProcedureType: number): Promise<MethodProcedureType>;
    abstract disableMethodProcedureType(idMethodProcedureType: number): Promise<MethodProcedureType>;
    abstract enableMethodProcedureType(idMethodProcedureType: number): Promise<MethodProcedureType>;
    abstract deleteMethodProcedureType(idMethodProcedureType: number): Promise<MethodProcedureType>;
    abstract updateMethodProcedureType(idMethodProcedureType: number, methodProcedureType: MethodProcedureType): Promise<MethodProcedureType>;
}