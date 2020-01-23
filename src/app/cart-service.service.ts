import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  items = [];
  constructor( private http: HttpClient) { }
addToCart(product)
{
  this.items.push(product);
}

getItems()
{
 return this.items;
}

clearCarts()
{
  this.items = [];
  return this.items;
}

getShippingPrices()
{
  return this.http.get('/assets/shipping.json');
}

}


