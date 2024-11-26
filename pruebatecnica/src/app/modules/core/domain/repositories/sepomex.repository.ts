import { Sepomex } from "../models/sepomex";

export abstract class SepomexRepository{
    abstract getSepomexByPK(idSuburb: number): Promise<Sepomex>;
    abstract getAll(params: any): Promise<any>;
}