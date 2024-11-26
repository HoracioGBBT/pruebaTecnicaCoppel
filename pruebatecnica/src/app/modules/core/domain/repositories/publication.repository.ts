import { Publication } from "../models/publication";

export abstract class PublicationRepository{
    abstract getPublications(params: any): Promise<any>;
    abstract getUnviewedPublications(params: any): Promise<any>;
    abstract createPublication(publication: Publication): Promise<Publication>;
    abstract getPublicationByPK(idPublication: number): Promise<Publication>;
    abstract disablePublication(idPublication: number): Promise<Publication>;
    abstract enablePublication(idPublication: number): Promise<Publication>;
    abstract deletePublication(idPublication: number): Promise<Publication>;
    abstract updatePublication(idPublication: number, publication: Publication): Promise<Publication>;
    abstract getPublicationUrlFile(keyFile: string): Promise<any>;
    abstract uploadPublication(file: any): Promise<any>;

}