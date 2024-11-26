import { UseCase } from "../../../../../config/interfaces/usecase.interface";
import { Branch } from "../../../domain/models/branch";
import { BranchRepository } from "../../../domain/repositories/branch.repository";


export class UpdateBranchUseCase implements UseCase<Branch> {    
    constructor( private branchRepository: BranchRepository ) {}

    async run(branch: Branch): Promise<Branch> {        
       
        return await this.branchRepository.updateBranch(branch.idBranch!, branch);
    }
}