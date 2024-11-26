import { MethodProcedure } from "../models/method-procedure";

export abstract class MethodProcedureRepository{
    abstract getMethodProcedure(params: any): Promise<any>;
    abstract createMethodProcedure(methodProcedure: MethodProcedure): Promise<MethodProcedure>;
    abstract getMethodProcedureByPK(idMethodProcedure: number): Promise<MethodProcedure>;
    abstract getMethodProcedureValueObjectByPK(idMethodProcedure: number): Promise<MethodProcedure>;

    abstract disableMethodProcedure(idMethodProcedure: number): Promise<MethodProcedure>;
    abstract enableMethodProcedure(idMethodProcedure: number): Promise<MethodProcedure>;
    abstract deleteMethodProcedure(idMethodProcedure: number): Promise<MethodProcedure>;
    abstract updateMethodProcedure(idMethodProcedure: number, methodProcedure: MethodProcedure): Promise<MethodProcedure>;

    abstract getMethodProcedureUrlFile(keyFile: string): Promise<any>;
    abstract uploadMethodProcedure(file: any): Promise<any>;

}