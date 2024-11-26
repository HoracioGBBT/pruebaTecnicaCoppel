import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from './alert.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private _router: Router,

    private _alertService:AlertService) { }

  logout() {
    this.removeToken();
    this._router.navigateByUrl('auth/login');
  }

  getToken() {
    const token = localStorage.getItem('token');
    return token;
  }

  async refreshToken(){
    let newToken;

    
    this.removeToken();
    if (newToken){
      this.saveToken(newToken);
    }
  }

  removeToken(){
    localStorage.removeItem('token');
  }
  saveToken(token:string){
    localStorage.setItem('token',token);
  }

  refreshTokenValidate() {

    const token = this.getToken();
    if (token) {
      const timeNow = new Date().getTime();
  

 
    }
    return false;
  }
}
