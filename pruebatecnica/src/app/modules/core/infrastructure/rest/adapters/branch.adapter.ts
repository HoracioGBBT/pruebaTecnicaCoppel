import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { lastValueFrom } from "rxjs";
import { environment } from "../../../../../../enviroments/enviroment"; 
import { Branch } from "../../../domain/models/branch";
import { BranchRepository } from "../../../domain/repositories/branch.repository";
import { BranchMapper } from "../mappers/branch.mapper";

@Injectable({
    providedIn: 'root',
})
export class BranchAdapter implements BranchRepository {
    url: string = environment.apiUrl;

    constructor(
        private http:HttpClient,
        private branchMapper: BranchMapper    
    ){}

    async getBranches(params: any): Promise<any> {
      const request = this.http.get(`${this.url}/branches`, {params: params});
      const data: any = await lastValueFrom(request);
      if(data.ok) {
        return {
            branches: this.branchMapper.toModelList( data.branches.data ),
            totalPages: data.branches.totalPages,
            totalItems: data.branches.totalItems,
          }
      } else {
          throw data.message;
      }
  }

  async getBranchByBusinessUnit(params: any): Promise<any> {
    const request = this.http.get(`${this.url}/branches/business/unit`, {params: params});
    const data: any = await lastValueFrom(request);

    if(data.ok) {
      return {
          branches: this.branchMapper.toModelList( data.branches.data ),
          totalPages: data.branches.totalPages,
          totalItems: data.branches.totalItems,
        }
    } else {
 
        throw data.message;
    }
}

    async getBranchByPK(idBranch: number): Promise<Branch> {
        const request = this.http.get(`${this.url}/branches/${idBranch}`);
        const data: any = await lastValueFrom(request);

        if(data.ok) {
            return this.branchMapper.toModel(data.branch);
        } else {
            throw data.message;
        }
    }

    async createBranch(branch: Branch): Promise<Branch> {
        const request = this.http.post(`${this.url}/branches`, branch);
        const data: any = await lastValueFrom(request);

        if(data.ok) {
            return this.branchMapper.toModel(data.branch);
        } else {
            throw data.message;
        }
    }

    async updateBranch(idBranch: number, branch: Branch): Promise<Branch> {
        const request = this.http.put(`${this.url}/branches/${idBranch}`, branch);
        const data: any = await lastValueFrom(request);

        if(data.ok) {
            return this.branchMapper.toModel(data.updatedBranch);
        } else {
            throw data.message;
        }
    }

    async enableBranch(idBranch: number): Promise<Branch> {
        const request = this.http.put(`${this.url}/branches/${idBranch}/enable`, null);
        const data: any = await lastValueFrom(request);
        if(data.ok) {
            return this.branchMapper.toModel(data.branchEnabled);
        } else {
            throw data.message;
        }
    }

    async disableBranch(idBranch: number): Promise<Branch> {
        const request = this.http.put(`${this.url}/branches/${idBranch}/disable`, null);
        const data: any = await lastValueFrom(request);

        if(data.ok) {
            return this.branchMapper.toModel(data.branchDisabled);
        } else {
            throw data.message;
        }
    }

    async deleteBranch(idBranch: number): Promise<Branch> {
        const request = this.http.delete(`${this.url}/branches/${idBranch}`);
        const data: any = await lastValueFrom(request);

        if(data.ok) {
            return this.branchMapper.toModel(data.branchDeleted);
        } else {
            throw data.message;
        }
    }

}
