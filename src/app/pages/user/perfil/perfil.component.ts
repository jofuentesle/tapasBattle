import { Component, OnInit } from '@angular/core';

import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';

import { User } from '../../../models/user.model';
import { AuthService } from 'src/app/service/auth.service';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  /*declaramos variables*/
  currentUser:User;
  imgUrl = '';
  loginForm: FormGroup;
  public formSubmitted = true;
  

  constructor( public authSrv: AuthService) { }

  getUrl = async () => {

    this.imgUrl = await this.authSrv.userData$.getImgUrl;

  }

  ngOnInit(): void {

    this.currentUser = this.authSrv.userData$;

    this.getUrl();

  }

}
