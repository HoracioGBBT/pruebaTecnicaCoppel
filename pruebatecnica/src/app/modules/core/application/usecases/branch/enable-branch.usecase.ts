import { UseCase } from "../../../../../config/interfaces/usecase.interface";
import { Branch } from "../../../domain/models/branch";
import { BranchRepository } from "../../../domain/repositories/branch.repository";


export class EnableBranchUseCase implements UseCase<Branch> {    
    constructor( private branchRepository: BranchRepository ) {}

    async run(idBranch: number): Promise<Branch> {           
        return await this.branchRepository.enableBranch(idBranch);
    }
}