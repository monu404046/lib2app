import { Component, OnInit } from '@angular/core';
import { LibraryService } from "../library.service";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from "@angular/router";


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  registerForm: FormGroup;
  user = {name:'', email:'', mobile:null, role:'', username: '', password: ''};
  alert: Boolean = false;

  constructor(private library: LibraryService, private formBuilder: FormBuilder, private router: Router) { }
  
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: [null, Validators.compose([Validators.required, Validators.pattern(/^[\.a-zA-Z ]+$/)])],
      email: [null, Validators.compose([Validators.required, Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)])],
      mobile: [null, Validators.compose([Validators.required, Validators.pattern(/^[6-9][0-9]{9}$/)])],
      role: [null, Validators.compose([Validators.required, Validators.pattern(/^Admin$|^User$/)])],
      username: [null, Validators.required],
      password: [null, [Validators.required, Validators.minLength(8)]]
    })
  }

  register(){
    console.log(this.user);
    if (this.registerForm.valid){
      this.library.checkUsernameEmail(this.user).subscribe(data=>{
        if(data['found']==true) this.alert = true;
        else {
          this.alert = false;
          this.library.addUser(this.user).subscribe();
          this.router.navigateByUrl("");
        }
      })
    }
  }
}
