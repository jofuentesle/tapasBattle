import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import { Router } from '@angular/router';

import Swal from 'sweetalert2';

//servicio
import { AuthService } from '../../service/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  /*declaramos variables*/
  loginForm: FormGroup;
  public formSubmitted = true;

  constructor(  private auth:AuthService,
                private router: Router,
                private fb:FormBuilder, ) 
              { }



  ngOnInit(): void {

    //Iniciamos variables del form
    this.loginForm = this.fb.group({
      email: ['', [Validators.email, Validators.required ]],
      password: ['', [Validators.required]]
    });
}

 async onLogin() {
    
    this.formSubmitted = true;
    //Verificamos formulario
    if( this.loginForm.invalid ) {
      return;
    }

    //Enviamos petición al server
    await this.auth.loginUser({ ...this.loginForm.value }).subscribe( resp => {
      
      this.router.navigateByUrl('/dashboard');
      
    }, (err)=> {
      //Popup error
      Swal.fire('Error', err.error.msg, 'error');
    });
}

}
