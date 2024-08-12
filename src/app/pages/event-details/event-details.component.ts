import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import {ThemePalette} from '@angular/material/core';

import { FileUploadService } from 'src/app/service/file-upload.service';
import { AuthService } from 'src/app/service/auth.service';
import { EventsService } from 'src/app/service/events.service';

import { User } from 'src/app/models/user.model';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})


export class EventDetailsComponent implements OnInit {

  color: ThemePalette = 'accent';
  checked = false;
  disabled = false;

   /*declaramos variables*/
   currentUser:User;
   allUsers:any = [];
   eventForm: FormGroup;
   currentEvent:any
   idEvent:string;
   public formSubmitted = true;
   public onLoad:Boolean = false;
   public userLoad:Boolean = false;
   imgUrl = '';
   accountForm: FormGroup;
   public imgUpload: File;
   public imgTemp: any = null;
   public viewImg: Boolean = false;

  constructor(  private authSrv:AuthService,
                private eSrv: EventsService,
                private upSrv: FileUploadService,
                private router: Router,
                private route: ActivatedRoute,
                private fb:FormBuilder,) {
                  
                 }

  //Obtener id
  async getId() {
  //Obtenemos id url
  await this.route.paramMap.subscribe(params => {
    
    this.idEvent = params.get("id");
    console.log(this.idEvent);
    });
    this.getEventById(this.idEvent);
 }    
 items = [
  { name: 'Item 1', value: false },
  { name: 'Item 2', value: false },
  { name: 'Item 3', value: false }
];
 
 toggleChange(index: number) {
  console.log('Value of item ' + (index + 1) + ': ' + this.items[index].value);
}

  async getEventById(idEvent:string) {

      this.currentEvent = this.eSrv.getEventById(idEvent).subscribe({
      next: events => {
        //Swal.fire('Evento creado con éxito', events.nombre, 'success');
        this.currentEvent = events.eventsById;
        this.onLoad= true ;
      },    
        error: err=>{
          Swal.fire('Error', err, 'error')
        }
    })
  }

//Obtenemos usuarios
async getUsers () {
    this.allUsers = this.authSrv.getAllUser().subscribe({
      next: (res:any) => {
        this.allUsers = res.usuarios;
        console.log(this.allUsers);
      },
      error: err=>console.log(err)}
      )}
  
//actualizar evento
updateEvent( ) {
  console.log("e",this.eventForm.value);
  this.eSrv.updateEvent({ ...this.eventForm.value}, this.currentEvent.id).subscribe(resp => {
    const { nombre } = this.eventForm.value; 
    console.log('Imagen actualizada');
    this.refreshImg();
  })
}

//Actualizamos img
async refreshImg() {  
  this.upSrv.updateFile(this.imgUpload, 'eventos', this.currentEvent.uid )
  .then( img => this.eSrv.updateEvent = img)
}


//Cambiar imagen
cambiarImagen(e) {

  this.imgUpload = e.target.files[0];
  
      if( !this.imgUpload ) {
        this.viewImg = true;
        return;
      }

      console.log("events", this.imgUpload);
      const reader = new FileReader();
      
      const url64 = reader.readAsDataURL( this.imgUpload );
      
      reader.onloadend = () => {
        this.imgTemp = reader.result;
        this.viewImg = false;
      }
  }


  ngOnInit(): void {
    this.currentUser = this.authSrv.userData$;
    this.userLoad = true;
    this.getUsers();
    this.getId();
    this.eventForm = this.fb.group({
      nombre:['jordi'],
      invitados:[],
      archivo:[]
    })
  }

}
