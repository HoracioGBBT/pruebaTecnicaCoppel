import { Bank } from "../models/bank";

export abstract class BankRepository{
    abstract getBanks(params: any): Promise<any>;
    abstract createBank(Bank: Bank): Promise<Bank>;
    abstract getBankByPK(idBank: number): Promise<Bank>;
    abstract disableBank(idBank: number): Promise<Bank>;
    abstract enableBank(idBank: number): Promise<Bank>;
    abstract deleteBank(idBank: number): Promise<Bank>;
    abstract updateBank(idBank: number, bank: Bank): Promise<Bank>;
}