import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EventsService } from 'src/app/service/events.service';

import { TapaComponent } from '../tapa/tapa.component';

import { Event } from '../../models/events.model';
import { AuthService } from 'src/app/service/auth.service';
import { User } from 'src/app/models/user.model';


import { FileUploadService } from 'src/app/service/file-upload.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  public idEvent: string;
  public currentEvent:Event;
  public onLoad:Boolean = false;
  public currentUser:User;
  public allUsers:any;
  public userLoad:Boolean = false;
  public imgUpload:File;
  public imgTemp: any = null;
  public viewImg: Boolean = false;
  isChecked = true;
   
  eventsForm: FormGroup;

  constructor(  private eventSrv:EventsService,
                private route: ActivatedRoute,
                private router: Router,
                private authSrv:AuthService) { }

  ngOnInit(): void {

    this.currentUser = this.authSrv.userData$;
   
    this.getId();
    this.getAllUser();

  }

  //Obtener id
  async getId() {
     //Obtenemos id url
     await this.route.paramMap.subscribe(params => {
      this.idEvent = params.get("id");
      });
      this.getEventId(this.idEvent);
  }
  
  //Obtenemos evento por id
  async getEventId ( idEvent ) {
  

    await this.eventSrv.getEventById(idEvent).subscribe({
      next: event => {

        //recuperamos datos usuario logeado
        this.currentEvent = event.eventsById;
        this.onLoad=true;
      },
      error: err=>console.log(err)}
    )}

 

  //obtener todos los usuarios
  getAllUser() {
    
    this.allUsers = this.authSrv.getAllUser().subscribe({
      next: users => {
        this.userLoad = true;
        this.allUsers = users;
      },
      error: err=>console.log(err)
    })
  }

  cambiarImagen(e) {
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
    console.log(e)
  }

}
