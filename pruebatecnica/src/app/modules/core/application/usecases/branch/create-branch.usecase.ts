import { UseCase } from "../../../../../config/interfaces/usecase.interface";
import BranchException from "../../../domain/exceptions/branch.exception";
import { Branch } from "../../../domain/models/branch";
import { BranchRepository } from "../../../domain/repositories/branch.repository";


export class CreateBranchUseCase implements UseCase<Branch> {    
    constructor( private branchRepository: BranchRepository ) {}

    async run(args: any): Promise<Branch> {

        return await this.branchRepository.createBranch(args);
    }
}