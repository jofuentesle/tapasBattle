import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import { MatAccordion } from '@angular/material/expansion';

import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/service/auth.service';
import { EventsService } from 'src/app/service/events.service';


import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.css'],
  
})

export class NewEventComponent implements OnInit {

  @ViewChild(MatAccordion) accordion: MatAccordion;
  
  /*declaramos variables*/
  currentUser:User;
  currentEvent:any;
  eventForm: FormGroup;
  public imgUpload: File;
  public formSubmitted = true;

  constructor(  private auth:AuthService,
                private eSrv: EventsService,
                private router: Router,
                private fb:FormBuilder,) { 

                  this.currentUser = this.auth.userData$;
                }
          
  
  async newEvent() {
    
    this.formSubmitted = true;
    
    const data = new Date();

    console.log(this.eventForm.value);
    
    //Verificamos formulario
    if( this.eventForm.invalid ) {
      return;
    }

    
    //Enviamos petición al server
    this.eventForm.value.eventPlanerId = this.currentUser.uid;
    
    await this.eSrv.createEvent({ ...this.eventForm.value }).subscribe({
      next: events => {
        
        Swal.fire('Evento creado. Ahora puedes actualizarlo', events.nombre, 'success');

        
        this.currentEvent = events;

        this.router.navigateByUrl(`/dashboard/event-details/${ events.evento.uid }`);
        this.eventForm.reset();
      },
      
        error: err=>{
          Swal.fire('Error', 'llega aqui', 'error')
        }
    })
  }

  ngOnInit(): void {

      //Iniciamos variables del form
      this.eventForm = this.fb.group({
        nombre: ['', [ Validators.required]],
        fecha: [new Date(),[Validators.required]],
        eventPlanerId: [this.currentUser.uid],
      });
    }
  }



