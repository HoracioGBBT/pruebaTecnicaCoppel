import { Branch } from "../models/branch";

export abstract class BranchRepository {
    abstract getBranches(params: any): Promise<any>;
    abstract createBranch(branch: Branch): Promise<Branch>;
    abstract getBranchByPK(idBranch: number): Promise<Branch>;
    abstract disableBranch(idBranch: number): Promise<Branch>;
    abstract enableBranch(idBranch: number): Promise<Branch>;
    abstract deleteBranch(idBranch: number): Promise<Branch>;
    abstract updateBranch(idBranch: number, branch: Branch): Promise<Branch>;
    abstract getBranchByBusinessUnit(params: any): Promise<any>;

}