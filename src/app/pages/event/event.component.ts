import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EventsService } from 'src/app/service/events.service';

import { TapaComponent } from '../tapa/tapa.component';

import { Event } from '../../models/events.model';
import { AuthService } from 'src/app/service/auth.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  public idEvent: string;
  public event:Event;
  public onLoad:Boolean = false;
  public currentUser:User;
  public guests:User[];
   
  eventsForm: FormGroup;

  constructor(  private eventSrv:EventsService,
                private route: ActivatedRoute,
                private router: Router,
                private authSrv:AuthService) { }

  ngOnInit(): void {

    this.currentUser = this.authSrv.userData$;
   
    this.getId();

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
        this.event = event.eventsById;
        console.log(event);
        this.onLoad=true;
      },
      error: err=>console.log(err)}
    )}

  //crear evento
  createEvent() {
    
  }

  confirmarAsistencia() {
    console.log(this.event);
    
    this.event = {
    chefs: [],
    eventPlanerId: null,
    Date: toString,
    guests: [],
    img: null,
    nombre: "Mi evento con invitados y cocineos y recetas",
    recipe: [],
    uid: "65e484acaca6be4cf396b2ef"
  }
    this.eventSrv.updateEvent(this.event).subscribe(resp => {
      console.log(resp)
    
    })
  }

  //obtener todos los usuarios
  getAllUser() {}

}
