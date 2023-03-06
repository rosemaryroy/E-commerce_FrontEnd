import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-view-medicine',
  templateUrl: './view-medicine.component.html',
  styleUrls: ['./view-medicine.component.css']
})
export class ViewMedicineComponent implements OnInit {
  
  medicineId:any
  viewMedicine:any
  phone: any;
 medicine: any;
  constructor(private activatedRoute:ActivatedRoute, private api:ApiService,private router:Router){

  }
  ngOnInit(): void {
    // fetch path parameter from url
    this.activatedRoute.params.subscribe((data:any)=>{
      console.log(data['id']);
      this.medicineId = data['id']
      // console.log(this.medicineId);
      
    })

  // to get details of requested medicine
    this.api.viewMedicines(this.medicineId).subscribe((result:any)=>{
      console.log(result.Medicines);
      this.viewMedicine = result.Medicines
      console.log(this.viewMedicine);
      
    })

  }

// addtowishlist
  addtoWishlist(medicine:any){
    console.log(medicine);
    if(!localStorage.getItem('token')){
      alert("Please Login")
      this.router.navigateByUrl('/medicines')
    }
    else{
      this.phone =JSON.parse(localStorage.getItem('phone')||'')
      console.log(this.phone);
      
      this.api.addtoWishlist(this.phone,medicine).subscribe((result:any)=>{
        alert(result.message)
      },
      (result:any)=>{
        alert(result.error.message)
      }
      )
    }
  }
  

  // addtoCart
  addtoCart(medicine:any){
    if(!localStorage.getItem('token')){
      alert("Please Login")
      this.router.navigateByUrl('/medicines')
    }
    else{
      this.phone =JSON.parse(localStorage.getItem('phone')||'')
      console.log(this.phone);
      
      this.api.addtoCart(this.phone,medicine).subscribe((result:any)=>{
        console.log(result);
        
        alert(result.message)
      },
      (result:any)=>{
        alert(result.error.message)
      }
      )
    }
  }

}
