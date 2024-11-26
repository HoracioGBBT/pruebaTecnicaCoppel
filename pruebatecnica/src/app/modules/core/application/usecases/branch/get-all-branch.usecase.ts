import { UseCase } from "../../../../../config/interfaces/usecase.interface";
import { Branch } from "../../../domain/models/branch";
import { BranchRepository } from "../../../domain/repositories/branch.repository";

export class GetAllBranchesUseCase implements UseCase<Branch[]>{
    constructor(
        private readonly branchRepository: BranchRepository
    ) {}

    async run( args: any ): Promise<any> {
        return await this.branchRepository.getBranches( args );
    }
}