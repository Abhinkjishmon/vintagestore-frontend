import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartarray:any=[];
  cartlist=new BehaviorSubject([])

  constructor() { }
  //add to cart
  addcart(fashion:any){
    this.cartarray.push(fashion);
    this.cartlist.next(this.cartarray)
    console.log(this.cartlist);
    
  }
  removeCart(){
    this.cartarray = []
    this.cartlist.next(this.cartarray)
  }

}
