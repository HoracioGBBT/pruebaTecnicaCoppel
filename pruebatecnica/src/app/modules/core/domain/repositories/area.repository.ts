import { Area } from "../models/area";

export abstract class AreaRepository {
    abstract getAreas(params: any): Promise<any>;
    abstract createArea(area: Area): Promise<Area>;
    abstract getAreaByPK(idArea: number): Promise<Area>;
    abstract getByIdParent(idParent: number ): Promise<any>;
    abstract disableArea(idArea: number): Promise<Area>;
    abstract enableArea(idArea: number): Promise<Area>;
    abstract deleteArea(idArea: number): Promise<Area>;
    abstract updateArea(idArea: number, area: Area): Promise<Area>;

}