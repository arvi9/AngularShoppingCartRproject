import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {listOfProducts} from '../products';
import {CartServiceService} from '../cart-service.service'

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product;
  productId: number; 

  //
  constructor( private route:ActivatedRoute, private carService:CartServiceService) { }
  
  addToCart(product)
  {
      window.alert('your product has been added to the cart');
      this.carService.addToCart(product);
  }

  ngOnInit() {
    this.route.paramMap.subscribe( params =>{
      // this.productId = params.get('productId');
      this.product = listOfProducts[+params.get('productId')];
    });
  }

}
