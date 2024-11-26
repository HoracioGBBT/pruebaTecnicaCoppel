import { PublicationType } from "../models/publication-type";

export abstract class PublicationTypeRepository{
    abstract getPublicationTypes(params: any): Promise<any>;
    abstract createPublicationType(publicationType: PublicationType): Promise<PublicationType>;
    abstract getPublicationTypeByPK(idPublicationType: number): Promise<PublicationType>;
    abstract disablePublicationType(idPublicationType: number): Promise<PublicationType>;
    abstract enablePublicationType(idPublicationType: number): Promise<PublicationType>;
    abstract deletePublicationType(idPublicationType: number): Promise<PublicationType>;
    abstract updatePublicationType(idPublicationType: number, publicationType: PublicationType): Promise<PublicationType>;
}