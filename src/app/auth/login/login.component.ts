import { Component, OnInit } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { FormBuilder, Validators, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';

import { Login } from '../../models/login.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //Variables
  

  constructor(  ) { 
   
  }

  onLogin() {
    alert("hola");
  }


 
  ngOnInit(): void {

  }

}
