import { UseCase } from "../../../../../config/interfaces/usecase.interface";
import { Branch } from "../../../domain/models/branch";
import { BranchRepository } from "../../../domain/repositories/branch.repository";


export class GetByPkBranchUseCase implements UseCase<Branch> {
    constructor( private branchRepository: BranchRepository ) {}

    async run(idBranch: any): Promise<Branch> { 
        return this.branchRepository.getBranchByPK(idBranch);
    }
}