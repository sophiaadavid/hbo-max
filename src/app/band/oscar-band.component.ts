import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-oscar-band',
    templateUrl: 'oscar-band.component.html',
    styleUrls: ['./oscar-band.component.css']
})

export class OscarBandComponent {
    @Input() img: string;
    @Input() award1: string;
    @Input() award2: string;
    @Input() award3: string;
    @Input() award4: string;
    @Input() award5: string;
    @Input() award6: string;


    constructor(){
        this.img = "";
        this.award1 = "OUTSTANDING LEAD ACTRESS IN A COMEDY SERIES";
        this.award2 = "OUTSTANDING LEAD ACTRESS IN A DRAMA SERIES";
        this.award3 = "OUTSTANDING WRITING FOR A COMEDY SERIES";
        this.award4 = "OUTSTANDING DRAMA SERIES";
        this.award5 = "OUTSTANDING LIMITED OR ANTHOLOGY SERIES";
        this.award6 = "OUTSTANDING VARIETY TALK SERIES";
    }
}