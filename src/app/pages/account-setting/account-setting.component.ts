import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatFormFieldControl } from '@angular/material/form-field';
import Swal from 'sweetalert2';

import { User } from '../../models/user.model';
import { AuthService } from 'src/app/service/auth.service';
import { FileUploadService } from 'src/app/service/file-upload.service';

@Component({
  selector: 'app-account-setting',
  templateUrl: './account-setting.component.html',
  styleUrls: ['./account-setting.component.css'],
})
export class AccountSettingComponent implements OnInit {


   /*declaramos variables*/
   currentUser:User;
   imgUrl = '';
   accountForm: FormGroup;
   public formSubmitted = true;
   public onLoad: Boolean = false;
   public imgUpload: File;
   public imgTemp: any = null;
   public viewImg: Boolean = false;
   value = 'Subir imagen';

  constructor(  private fb:FormBuilder,
                private router: Router,
                private authSrv: AuthService,
                private upSrv: FileUploadService) { 
                  //Variable para cambiar vista de imagen
                  this.viewImg = true;
                  this.onLoad = true;
                }

    //Obtenemos path img
    getUrl = async () => {

    this.imgUrl = await this.authSrv.userData$.getImgUrl;

  }

  ngOnInit(): void {
    //Obtenemos usuario logeado
    this.currentUser = this.authSrv.userData$;
    //Obtenemos img path
    this.getUrl();
     //Inicializamos formulario
     this.accountForm = this.fb.group({
      nombre: [ this.currentUser.nombre, Validators.required],
      email: [this.currentUser.email, [ Validators.required, Validators.email] ],
      archivo:[],
    })
    this.imgTemp = '';
    console.log(this.accountForm.get('archivo')?.touched);
  }

  //Atualizamos perfil
  updateAccount() {
    this.authSrv.updateAccount({ ...this.accountForm.value })
    .subscribe( res => {
      const { nombre, email } = this.accountForm.value; 
      this.currentUser.nombre = nombre;
      this.currentUser.email = email;
      this.refreshImg();
      this.router.navigateByUrl('/dashboard/user');
    });

  }

  //Actualizamos img
  async refreshImg() {  
    this.upSrv.updateFile(this.imgUpload, 'usuarios', this.currentUser.uid )
    .then( img => this.authSrv.userData$.img = img)
}

  //Subimos foto
  cambiarImagen( e ) {
      this.imgUpload = e.target.files[0];
      if( !this.imgUpload ) {
        this.viewImg = true;
        return;
      }

      const reader = new FileReader();
      const url64 = reader.readAsDataURL( this.imgUpload );

      reader.onloadend = () => {
        this.imgTemp = reader.result;
        this.viewImg = false;
      }
  }

}
