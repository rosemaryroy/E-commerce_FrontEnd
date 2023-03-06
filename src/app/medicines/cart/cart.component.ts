import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import party from 'party-js';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  IsCart:boolean=false
  cartstatusMsg=''
  phone:any
  cart:any
  cartMedicines:any
  totalPrice:any
   GST:any
   grantTotal:any
  //  promoCode:any
   promoMsg:any
   promoCode="MEDS20"
   Code:any
  checkOutMsg: string=''
  emp: any;
 


  constructor(private api:ApiService){}

  ngOnInit(): void {

    this.phone = JSON.parse(localStorage.getItem('phone')||'')
    this.api.getCart(this.phone).subscribe((result:any)=>{
    console.log(result);
    this.cart=result.cart
    console.log(this.cart);
    this.totalPrice=result.totalPrice
    console.log(this.totalPrice);
    
    this.GST=result.GST
    // this.disTotal=result.grantTotal
     this.grantTotal=result.grantTotal

      if(this.cart.length==0){
        this.cartstatusMsg="cart empty"
      }
    },
    (result:any)=>{
      if(result.error.message){
        this.cartstatusMsg="cart empty"
      }
      
    }
    )

  }

  // removeItem from cart

  removeItemFromCart(medicineId: any) {
    this.api.removeItemCart(medicineId).subscribe((result: any) => {
      console.log(result);

      this.cartMedicines = result.cart
      console.log(this.cartMedicines);

    },
      (result: any) => {
        if (result.error.message){
          this.cartstatusMsg="cart empty"

        }
      }
    )
  }
 
  discount(event:any){ 
    let Code=event.target.value
    if(Code==this.promoCode){
     this.grantTotal=this.grantTotal-((20/100)*this.grantTotal)
  
       this.promoMsg="Invalid Coupon"

    }
    // else if(promoCode=""){
    //   this.disTotal=this.grantTotal

    // }
    else{
      this.promoMsg="Invalid Coupon"
    }
  }

  // emptycart()
  emptycart(phone:any){
    this.api.emptycart(phone).subscribe((result)=>{
      console.log(result);
      
      this.emp=result
    })
  }

  // checkout
  checkout(){
    this.checkOutMsg='Your order has been placed, Thank You!'
    // this.emptycart()
    setTimeout(() => {
      window.location.reload()
    }, 5000);
  }

  // confetti
  showconfetti(source:any){
    party.confetti(source);
  }

}
