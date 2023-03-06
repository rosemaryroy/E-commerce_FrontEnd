import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  allmedicines: any
  phone: any
  wishlist: any
  wishlistStatusmsg: string = ''
  Empty: boolean = false
  constructor(private api: ApiService, private router: Router) {

  }
  ngOnInit(): void {
    this.phone = JSON.parse(localStorage.getItem('phone') || '')
    this.api.getwishlist(this.phone).subscribe((result: any) => {
      this.wishlist = result.wishlist
      console.log(this.wishlist);

      if (this.wishlist.length == 0) {
        this.wishlistStatusmsg = 'wishlist empty'
      }


    },
      (result: any) => {
        if (result.error.message) {
          this.wishlistStatusmsg = 'wishlist empty'
        }
      }
    )
  }

  // removeItemFromWishlist
  removeItem(medicineId: any) {
    console.log(medicineId);
    
    this.api.removeItemFromWishlist(medicineId).subscribe((result: any) => {
      console.log(result);

    this.wishlist = result.wishlist
    console.log(this.wishlist);


    },
      (result: any) => {
        if (result.error.message)
        this.wishlistStatusmsg = 'wishlist empty'
      }
    )
  }


  // addtoCart
  addtoCart(medicine: any) {
    console.log("inside add to cart",medicine);
    
    if (!localStorage.getItem('token')) {
      alert("Please Login")
      this.router.navigateByUrl('/medicines')
    }
    else {
      this.phone = JSON.parse(localStorage.getItem('phone') || '')
      console.log(this.phone);

      this.api.addtoCart(this.phone, medicine).subscribe((result: any) => {
        alert(result.message)
        this.removeItem(medicine.document_id)

      },
        (result: any) => {
          alert(result.error.message)
        }
      )
    }
  }


}
