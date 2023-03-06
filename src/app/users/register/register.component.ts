import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  // register form group
  registerForm = this.fb.group({
    // array
    name:['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
    email:['',[Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
    phone: ['', [Validators.required, Validators.pattern('[0-9]*$'),Validators.minLength(10), Validators.maxLength(10)]],
    pswd: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]*')]]

  })
  constructor(private fb: FormBuilder, private api: ApiService, private router: Router) {

  }
  register() {
    if (this.registerForm.valid) {
      // alert("You are successfully Registered")
      let name = this.registerForm.value.name
      let email = this.registerForm.value.email
      let phone = this.registerForm.value.phone
      let pswd = this.registerForm.value.pswd
      this.api.register(name,email,phone,pswd)
        .subscribe(
          // success
          (result: any) => {
           alert(result.message)
            
            // navigate url
            this.router.navigateByUrl('/users/login')
          },
          (result:any)=>{
            alert(result.error.message)
          }
          
        )
    }
    else{
      alert('invalid form')
    }
  }
}
