import { Route } from "../models/route";

export abstract class RouteRepository{
    abstract getRouteByPK(idRoute: number): Promise<Route>;
    abstract getAll(params: any): Promise<any>;
    abstract getRoutesByBusinessUnitBranch( args: any ):Promise<any>;

}