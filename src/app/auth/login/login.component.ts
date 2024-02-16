import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import { Router } from '@angular/router';

//servicio
import { AuthService } from '../../service/auth.service';

import { Login } from '../../models/login.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  /*declaramos variables*/
  loginForm: FormGroup;
  loginDB: Login;

  constructor(  private auth:AuthService,
                private router: Router,
                private fb:FormBuilder, ) 
              { }

  onLogin() {
    console.log("asfasfsafsa");
    // Handle form submission here
    //if (this.loginForm.valid) {
      console.log(this.loginForm.value);
 // }
}


  ngOnInit(): void {

      //Iniciamos variables del form
      this.loginForm = this.fb.group({
        email: ['', [Validators.email, Validators.required ]],
        password: ['', [Validators.required]]
      });
  }

}
