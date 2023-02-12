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
    this.grandTotal
    
  }
  removeCart(){
    this.cartarray = []
    this.cartlist.next(this.cartarray)
  }
  removeCartItem(product:any){
    this.cartarray.map((item:any,index:any)=>{
      if(product.id==item.id){
        this.cartarray.splice(index,1)
      }
    })
    this.cartlist.next(this.cartarray)
  }
  //grandTotal
  grandTotal(){
    let total = 0
    this.cartarray.map((fashion:any)=>{
      total += fashion.price
      console.log(total);
      
    })
    return total
  }

}
