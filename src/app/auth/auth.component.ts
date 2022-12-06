import { Component } from "@angular/core";
import { AuthService } from "./auth.service";
import { AuthResponse } from "./authResponse";

@Component({
    selector: "app-auth",
    templateUrl: "auth.component.html"
})
export class AuthComponent{
    constructor(private authService: AuthService){

    }
    public onSubmit(data: any){
        console.log("Button clicked");
        console.log(data.value);
        this.authService.signUp(data.value.email, data.value.password).subscribe((data:AuthResponse) => {console.log(data);}, error => {console.log(error.error);})
    }
}