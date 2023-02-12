import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartitem:any=[]
  grandTotal:number = 0
  constructor(private cart:CartService) { }

  ngOnInit(): void {
    this.cart.cartlist.subscribe(
      (data:any)=>{
        this.cartitem=data
      }
    )
    this.grandTotal = this.cart.grandTotal()
  }
  emptyCart(){
    this.cart.removeCart()
  }
   //removeItem(product)
   removeItem(product:any){
    this.cart.removeCartItem(product)
    this.grandTotal = this.cart.grandTotal()
  }
}
