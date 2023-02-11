import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-all-fashions',
  templateUrl: './all-fashions.component.html',
  styleUrls: ['./all-fashions.component.css']
})
export class AllFashionsComponent implements OnInit {

  searchterm:string='';
  allfashions:any=[];
  constructor(private api:ApiService,private cart:CartService) { }

  ngOnInit(): void {
    this.api.getAllFashions().subscribe(
      (data:any)=>{
        this.allfashions=data.Fashions

      }
    )
      this.api.searchkey.subscribe(
        (data:any)=>{
          this.searchterm=data
        }
      )
  }

  addtowishlist(fashion:any){
    this.api.addtowishlist(fashion).subscribe(
      (result:any)=>{
        alert(result.message)
      },
      (result:any)=>{
        alert(result.error.message)
      }

    )
  }

  addcart(fashion:any){
    this.cart.addcart(fashion)
  }

}
