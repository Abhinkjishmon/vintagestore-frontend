import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit {

  wishlist:any
  emsg:string=''
  constructor(private api:ApiService, private router:Router, private cart:CartService) { }

  ngOnInit(): void {
    this.api.getwishlist().subscribe(
      (data:any)=>{
        this.wishlist=data.fashions
        if(this.wishlist.length==0){
          this.emsg='empty wishlit'
        }
      },
      (data:any)=>{
        this.wishlist=data.error.message
      }

    )
  }
  deletewish(fashion:any){
    this.api.deletewish(fashion.id).subscribe(
      (result:any)=>{
        alert(result.message)
        this.router.navigateByUrl('wish-list')
        // window.location.reload()
      },
      (result:any)=>{
        alert(result.error.message)
      }
    )
  }

  addcart(fashion:any){
    this.cart.addcart(fashion)
    this.deletewish(fashion)
  }

}
