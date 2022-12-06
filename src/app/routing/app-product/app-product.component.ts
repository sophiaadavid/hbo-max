import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { OscarBandComponent } from '../../band/oscar-band.component';

@Component({
  selector: 'add-product',
  templateUrl: './app-product.component.html',
  styleUrls: ['./app-product.component.css']
})
export class AppProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  addProduct(product: OscarBandComponent){
    console.log("You clicked add product");
    console.log(product);
  }

}
