import { Component, OnInit } from '@angular/core';
import {listOfProducts} from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products = listOfProducts;


  constructor() { }

  ngOnInit() {
  }

  share()
  {
    let y = "Product";
    window.alert(`The ${ y}  has been shared`);
  }
  
  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}
