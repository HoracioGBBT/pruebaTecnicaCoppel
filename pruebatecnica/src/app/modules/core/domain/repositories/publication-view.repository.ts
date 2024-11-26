import { PublicationView } from "../models/publication-view";

export abstract class PublicationViewRepository{
    abstract getPublicationViews(params: any): Promise<any>;
    abstract createPublicationView(publicationView: PublicationView): Promise<PublicationView>;
    abstract getPublicationViewByPK(idPublicationView: number): Promise<PublicationView>;
    abstract disablePublicationView(idPublicationView: number): Promise<PublicationView>;
    abstract enablePublicationView(idPublicationView: number): Promise<PublicationView>;
    abstract deletePublicationView(idPublicationView: number): Promise<PublicationView>;
    abstract updatePublicationView(idPublicationView: number, publicationView: PublicationView): Promise<PublicationView>;
}