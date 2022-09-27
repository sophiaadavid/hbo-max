import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-oscar-band',
    templateUrl: 'oscar-band.component.html',
    styleUrls: ['./oscar-band.component.css']
})

export class OscarBandComponent {
    @Input() 
    img: string;
    award: string;

    constructor(){
        this.img = "/assets/hp-emmy-bg-desktop.jpg";
        this.award = "";
    }
}