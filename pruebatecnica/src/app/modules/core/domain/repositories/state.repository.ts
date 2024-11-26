import { State } from "../models/state";

export abstract class StateRepository{
    abstract getStates(params: any): Promise<any>;
    abstract getStateByPK(idState: number): Promise<State>;
    abstract createState(state: State): Promise<State>;
    abstract updateState(idState: number, company: State): Promise<State>;
    abstract enableState(idState: number): Promise<State>;
    abstract disableState(idState: number): Promise<State>;
    abstract deleteState(idState: number): Promise<State>;
}