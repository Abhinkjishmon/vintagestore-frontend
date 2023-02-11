import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  searchkey=new BehaviorSubject('')
  constructor(private http:HttpClient) {

   }

   getAllFashions(){
    return this.http.get('http://localhost:3000/all-fashions')
  }

  //add to wishlist
  addtowishlist(fashion:any){
    const body={
      id:fashion.id,
      title:fashion.title,
      price:fashion.price,
      description:fashion.description,
      image:fashion.image,
    }

    return this.http.post('http://localhost:3000/addtowishlist',body)

  }

//get wishlist details
getwishlist(){
  return this.http.get('http://localhost:3000/getwishlist')
}


//delete wishlist
deletewish(id:any){
  return this.http.delete('http://localhost:3000/deletewish/'+id) 

}

}
