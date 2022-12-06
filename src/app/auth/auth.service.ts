import { HttpClient } from "@angular/common/http";
import { EnvironmentInjector, Injectable } from "@angular/core";
import { AuthResponse } from "./authResponse";

@Injectable({
    providedIn: 'root'
})
export class AuthService{
    baseURL: string =  "https://identitytoolkit.googleapis.com/v1/accounts"
    signUpendpoint: string = "signUp"
    public constructor(private http:HttpClient){

    }
    public signUp(email: string, password: string){
        const requestBody={
            "email": email,
            "password": password,
            "requestSecureToken":true
        }
        return this.http.post<AuthResponse>(this.baseURL + ':' + this.signUpendpoint +'?key=' + 'AIzaSyCdA5oBRGPfuxglY0_gtRN9hyFrJR_7DBE', requestBody);
    }
}