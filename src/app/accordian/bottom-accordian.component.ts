import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bottom-accordian',
  templateUrl: './bottom-accordian.component.html',
  styleUrls: ['./bottom-accordian.component.css']
})
export class BottomAccordianComponent{
    @Input() 
    backgroundColor: string;
    button: string;

    constructor(){
        this.backgroundColor = "";
        this.button = "";
        

    }
}
