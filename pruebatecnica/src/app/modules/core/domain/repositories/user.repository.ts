import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
    providedIn: 'root',
})
export abstract class UserRepository{

    abstract getByPk(idUser:number):Promise<User>;
    abstract getAll(params:any):Promise<User[]>;
    abstract getCurrentUser():Promise<any>;
    abstract getCurrentUserId():Promise<any>;
    abstract login(username:string,password:string):Promise<any>;
    abstract getByCode(code:string):Promise<User>;
    abstract confirmPassword(data:any,password:string):Promise<any>;
    abstract createUser(user:User):Promise<User>;
    abstract updateUser(idUser: number, user: User):Promise<User>;
    abstract deleteUser(idUser:number):Promise<User>;
    abstract enableUser(idUser:number):Promise<User>;
    abstract disableUser(idUser:number):Promise<User>;
    abstract refreshToken():Promise<any>;
    abstract generateTemporalPassword(idUser:number):Promise<any>;

    // abstract restorePassword(idUser:number):Promise<any>;

}