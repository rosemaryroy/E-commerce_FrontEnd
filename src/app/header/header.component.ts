import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  phone: any;
  medicine: any
  name: any;


  constructor(private api: ApiService, private router: Router) {

  }

  cartCount: number = 0
  user: string = ''
  isLogin: boolean = false

  ngOnInit(): void {
    if (localStorage.getItem('token')) {
      this.isLogin = true
    }
    if (localStorage.getItem('name')) {
      this.user = localStorage.getItem('name') || ''
      this.name = this.user

    }
    this.phone = JSON.parse(localStorage.getItem('phone') || '')
    this.api.getCart(this.phone).subscribe((result: any) => {
      this.cartCount = result.cart.length
    })

  }

  // checkLogin()
  checkLogin() {
    if (localStorage.getItem('token')) {
      this.router.navigateByUrl('/medicines/wishlist')
    }
    else {
      this.router.navigateByUrl('/users/login')
    }
  }

  checkLoginforCart() {
    if (localStorage.getItem('token')) {
      this.router.navigateByUrl('/medicines/cart/:m_id')
    }
    else {
      this.router.navigateByUrl('/users/login')
    }
  }

  // logout()
  logout() {
    localStorage.removeItem('token')
    localStorage.removeItem('name')
    localStorage.removeItem('phone')

    // navigate to login
    // this.router.navigateByUrl('')
    window.location.reload()
  }


  search(event: any) {
    let searchTerm = event.target.value
    this.api.searchKey.next(searchTerm)
    console.log(this.api.searchKey);

  }
}
