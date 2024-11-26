import { NgModule } from '@angular/core';
import { BranchRepository } from '../../../domain/repositories/branch.repository';

import { CreateBranchUseCase, GetByPkBranchUseCase, GetAllBranchesUseCase, DisableBranchUseCase, EnableBranchUseCase, DeleteBranchUseCase, UpdateBranchUseCase } from "../../../application/usecases/branch";
import { HttpClientModule } from '@angular/common/http';
import { BranchAdapter } from '../../rest/adapters/branch.adapter';
import { GetBranchByBusinessUnitUseCase } from '../../../application/usecases/branch/get-branch-by-business-unit.usecase';

const getAllBranchesUseCase = (branchRepository: BranchRepository) => new GetAllBranchesUseCase(branchRepository);
const getBranchByBusinessUnitUseCase = (branchRepository: BranchRepository) => new GetBranchByBusinessUnitUseCase(branchRepository);
const getByPkBranchUseCase = (branchRepository: BranchRepository) => new GetByPkBranchUseCase(branchRepository);
const createBranchUseCase = (branchRepository: BranchRepository) => new CreateBranchUseCase(branchRepository);
const disableBranchUseCase = (branchRepository: BranchRepository) => new DisableBranchUseCase(branchRepository);
const enableBranchUseCase = (branchRepository: BranchRepository) => new EnableBranchUseCase(branchRepository);
const deleteBranchUseCase = (branchRepository: BranchRepository) => new DeleteBranchUseCase(branchRepository);
const updateBranchUseCase = (branchRepository: BranchRepository) => new UpdateBranchUseCase(branchRepository);


@NgModule({
    imports: [        
        HttpClientModule
    ],
    exports: [],
    declarations: [],
    providers: [
        {useClass: BranchAdapter, provide: BranchRepository},
        { provide: GetAllBranchesUseCase, useFactory: getAllBranchesUseCase, deps: [BranchRepository] },
        { provide: GetBranchByBusinessUnitUseCase, useFactory: getBranchByBusinessUnitUseCase, deps: [BranchRepository] },
        { provide: GetByPkBranchUseCase, useFactory: getByPkBranchUseCase, deps: [BranchRepository] },
        { provide: CreateBranchUseCase, useFactory: createBranchUseCase, deps: [BranchRepository] },
        { provide: DisableBranchUseCase, useFactory: disableBranchUseCase, deps: [BranchRepository] },
        { provide: EnableBranchUseCase, useFactory: enableBranchUseCase, deps: [BranchRepository] },
        { provide: DeleteBranchUseCase, useFactory: deleteBranchUseCase, deps: [BranchRepository] },
        { provide: UpdateBranchUseCase, useFactory: updateBranchUseCase, deps: [BranchRepository] },

    ],
})
export class BranchProviderModule { }
