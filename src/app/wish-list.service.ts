import { HttpClient, HttpClientJsonpModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor( private _HttpClient:HttpClient) { }


  addToWishList(prodId:string):Observable<any>{

  return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/wishlist` , 
  
  {
    productId: prodId
}
  
  )

  }


  getWishList():Observable<any>{

 return this._HttpClient.get('https://ecommerce.routemisr.com/api/v1/wishlist')

  }

  removeWishList(prodId:string):Observable<any>{
 
    return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${prodId}`)


  }

 


}