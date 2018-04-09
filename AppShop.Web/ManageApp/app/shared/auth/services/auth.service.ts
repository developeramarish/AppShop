import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelper, tokenNotExpired } from 'angular2-jwt';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
    private jwtHelper = new JwtHelper();

    constructor(private http: HttpClient) {
    }

    login(credentials) {
        return this.http
            .post('/api/auth/login', credentials)
            .map(result => {
                localStorage.setItem('token', result['token']);
                return true;
            }); 
    }

    logout() {
        localStorage.removeItem('token');
    }

    isLoggedIn() {
        return tokenNotExpired('token');        
    }

    get token(){
        return localStorage.getItem('token');
    }
    
    get currentUser(){
        let token = localStorage.getItem('token');
        if(!token) return null;

        return this.jwtHelper.decodeToken(token);
    }
}