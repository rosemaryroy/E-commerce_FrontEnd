import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

errorMsg:string=""
successMsg:boolean=false

 // login group
 loginForm = this.fb.group({
  // array
  phone:['',[Validators.required,Validators.pattern('[0-9]*$'),Validators.minLength(10), Validators.maxLength(10)]],
  pswd:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]*')]]
})
constructor(private fb:FormBuilder,private api:ApiService, private router:Router){

}

login(){
  if(this.loginForm.valid){
    let phone = this.loginForm.value.phone
    let pswd = this.loginForm.value.pswd
    // login api call
    this.api.login(phone,pswd)
    .subscribe(
      // success
      (result: any) => {
        this.successMsg = true
        // store name in local storage
        localStorage.setItem("name",result.name)
        // store phone number in local storage
        localStorage.setItem("phone",result.phone)
        // store token in local storage
        localStorage.setItem("token",result.token)
      //  alert(result.message)
        setTimeout(() => {
          this.router.navigateByUrl('')

        }, 2000);
        // navigate url
      },
      (result:any)=>{
        this.errorMsg = result.error.message
      }
      
    )
  }
  else{
    alert('invalid form')
  }
}
  
}
