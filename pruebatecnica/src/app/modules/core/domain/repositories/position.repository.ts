import { Position } from "../models/position";

export abstract class PositionRepository {
    abstract getPositions(params: any): Promise<any>;
    abstract createPosition(position: Position): Promise<Position>;
    abstract getPositionByPK(idPosition: number): Promise<Position>;
    abstract getByIdParent(idPosition: number ): Promise<any>;
    abstract disablePosition(idPosition: number): Promise<Position>;
    abstract enablePosition(idPosition: number): Promise<Position>;
    abstract deletePosition(idPosition: number): Promise<Position>;
    abstract updatePosition(idPosition: number, position: Position): Promise<Position>;

}