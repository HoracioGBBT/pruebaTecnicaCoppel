import { Department } from "../models/department";
import { Notary } from "../models/notary";


export abstract class NotaryRepository {
    abstract getNotaries(params: any): Promise<any>;
    abstract getNotaryByPK(idNotary: number): Promise<Notary>;
    abstract createNotary(notary: Notary): Promise<Notary>;
    abstract updateNotary(idNotary: number, notary: Notary): Promise<Notary>;
    abstract enableNotary(idNotary: number): Promise<Notary>;
    abstract disableNotary(idNotary: number): Promise<Notary>;
    abstract deleteNotary(idNotary: number): Promise<Notary>;
}