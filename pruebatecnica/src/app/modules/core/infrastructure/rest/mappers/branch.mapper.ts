import { Injectable } from "@angular/core";
import { Mapper } from "../../../../../config/interfaces/maper.interface";
import { Branch } from "../../../domain/models/branch";
@Injectable({
    providedIn: 'root'
})

export class BranchMapper implements Mapper<Branch, any> {
    constructor( 
    ){}

    public toModel( value: any ): Branch {
        const branch = new Branch(
            value.idBranch,
            value.name,
            value.businessName,
            value.status,
            value.configurationInterest,
            value.commissionConfiguration,
            value.isCorporate,
            value.businessUnit,
            value.idBranchBusinessUnit,
            value.sepomex,
            value.outdoorNumber,
            value.interiorNumber,
            value.reference,
            value.streetName,
            value.country,
            value.postalCode,
        );
        return branch;

    }

    public toEntity( model: Branch ): any {
        return {
            idBranch: model.idBranch,
            name: model.name,
            businessName: model.businessName,
			status: model.status,
            configurationInterest: model.configurationInterest,
            commissionConfiguration: model.commissionConfiguration,
            isCorporate: model.isCorporate,
            idBranchBusinessUnit: model.idBranchBusinessUnit,
            outdoorNumber: model.outdoorNumber,
            interiorNumber: model.interiorNumber,
            reference: model.reference,
            streetName: model.streetName,
            postalCode: model.postalCode,
            state: model.state,
            city: model.city,
            suburbName: model.suburbName
        }
    }

    public toModelList( values: any ): Branch[] {
        const branches: Branch[] = [];
        values.map( (value: any) => {
            branches.push(this.toModel(value));
        });
        return branches;
    }

    public toEntityList( branches: Branch[] ): any[] {
        const branchesEntity: any[] = [];
        branches.map( (branch: Branch) => {
            branchesEntity.push(this.toEntity(branch));
        });
        return branches;
    }
}