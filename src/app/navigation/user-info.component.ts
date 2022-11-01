import { HttpClient } from "@angular/common/http";
import { Component, Injectable, OnInit } from "@angular/core";

@Injectable()
@Component({
    selector: 'app-user-info',
    templateUrl: 'user-info.component.html'
})
export class UserInfoComponent implements OnInit{
    constructor(private http: HttpClient){
    }

    ngOnInit():void {
        console.log("sending get request");
        this.showUserInfo();
    }
    getUserInfo(){
        return this.http.get('https://hello-world-app-bc466-default-rtdb.firebaseio.com/my-info.json');
    }

    showUserInfo(){
        this.getUserInfo().subscribe(data => {
            console.log(data);
        })
    }

}