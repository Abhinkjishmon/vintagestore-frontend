import { Component, OnInit } from '@angular/core';
import { ApiService } from '../fashions/api.service';
import { CartService } from '../fashions/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  cartcount:number=0
  constructor(private api:ApiService, private cart:CartService) { }

  ngOnInit(): void {
    this.cart.cartlist.subscribe(
      (data:any)=>{
        if(data){
          this.cartcount=data.length;
        }
      }
    )
  }

  search(event:any){
    let searchkey=event.target.value
    this.api.searchkey.next(searchkey)
  }

}
