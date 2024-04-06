import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';

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

   /*declaramos variables*/
   currentUser:User;
   allUsers:any;
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



  constructor(  private auth:AuthService,
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
    });
    this.getEventById(this.idEvent);
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

    this.allUsers = this.auth.getAllUser().subscribe({
      next: (res:any) => {
        this.allUsers = res.usuarios;
      },
      error: err=>console.log(err)}
      )}
  
//actualizar evento
updateEvent() {}


//Cambiar imagen
cambiarImagen(e) {

  this.imgUpload = e.target;
  console.log(e.target);
  
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


  ngOnInit(): void {
    this.currentUser = this.auth.userData$;
    this.userLoad = true;
    this.getUsers();
    this.getId();
    this.eventForm = this.fb.group({
      nombre: ['', Validators.required],
      fecha: [ ],
      archivo:[]
    })
  }

}
