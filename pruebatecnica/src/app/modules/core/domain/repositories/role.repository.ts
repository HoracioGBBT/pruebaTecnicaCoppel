import { Injectable } from '@angular/core';
import { Role } from '../models/role';

@Injectable({
    providedIn: 'root',
})
export abstract class RoleRepository{

    abstract getAll(params:any):Promise<Role[]>;
    abstract getByPk(idRole:number):Promise<Role>;
    abstract createRole(role:Role):Promise<Role>;
    abstract updateRole(idRole: number, role: Role):Promise<Role>;
    abstract deleteRole(idRole:number):Promise<Role>;
    abstract enableRole(idRole:number):Promise<Role>;
    abstract disableRole(idRole:number):Promise<Role>;

}