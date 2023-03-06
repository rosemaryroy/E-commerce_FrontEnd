import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


const options = {
  headers: new HttpHeaders()
}

@Injectable({
  providedIn: 'root'
})


export class ApiService {
  
  
  searchKey = new BehaviorSubject('')

  constructor(private http: HttpClient) {

  }

  appendUser() {
    // fetch user id to http header
    const phone = localStorage.getItem('phone') || ''
    // create header
    var headers = new HttpHeaders()
    if (phone) {
      headers = headers.append('phone', phone)
      options.headers = headers
    }
    return options
  }



  allMedicines() {
    return this.http.get('http://localhost:3000/all-medicines')
  }

  //  view medicine
  viewMedicines(medicineId: any) {
    return this.http.get('http://localhost:3000/view-medicines/' + medicineId)
  }

  register(name: any, email: any, phone: any, pswd: any) {

    const body = {
      name,
      email,
      phone,
      pswd
    }
    // server call to register 
    return this.http.post('http://localhost:3000/users/register', body)
  }
  // login
  login(phone: any, pswd: any) {
    const body = {
      phone,
      pswd
    }
    // server call to login an account and return response to login component

    return this.http.post('http://localhost:3000/users/login', body)

  }

  // add to wishlist
  addtoWishlist(phone: any, medicine: any) {
    const body = {
      phone,
      medicine
    }
    return this.http.post('http://localhost:3000/medicines/add_to_wishlist', body)
  }
  
  // medicines/get_wishlist
  getwishlist(phone: any) {
    return this.http.get('http://localhost:3000/medicines/get_wishlist/' + phone)
  }

  // remove item from wishlist
  removeItemFromWishlist(medicineId: any) {
    return this.http.delete('http://localhost:3000/medicines/remove-item-wishlist/' + medicineId, this.appendUser())
  }

  // add to cart
  addtoCart(phone: any, medicine: any) {
  
    const body = {
      phone,
      medicine
    }
    return this.http.post('http://localhost:3000/medicines/add_to_cart', body)

  }

  // medicines/get_cart
  getCart(phone: any) {
    return this.http.get('http://localhost:3000/medicines/get_cart/' + phone)
  }

  // removeItemFromCart(medicineId)
  removeItemCart(medicineId: any) {
    return this.http.delete('http://localhost:3000/medicines/remove_from_cart/' + medicineId,this.appendUser())
  }

  // empty cart
  emptycart(phone:any){
    return this.http.delete('http://localhost:3000/medicines/empty_cart/' + phone)

  }

  // all skin care 
  // skinCare(){
  //   return this.http.get('http://localhost:3000/all-skincare')
  // }


  // viewSkincare

  // viewSkincare(id:any){
  //   return this.http.get('http://localhost:3000/view-skincare/'+id)
  // }


  // add to wishlist
  // addItemtoWishlist(phone: any, skinItem: any) {
  //   const body = {
  //     phone,
  //     skinItem
  //   }
  //   return this.http.post('http://localhost:3000/medicines/add_Item_to_wishlist', body)
  // }

}
