import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/service/events.service';

import Swal from 'sweetalert2';

import { Event } from '../../models/events.model';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public events:Event[]=[];
  
  public cargando: boolean = true;
  

  constructor( private eventsSrv:EventsService ) { }

  ngOnInit(): void {
    this.onLoadEvents();
  }

  //cargamos eventos
  async onLoadEvents() {
    await this.eventsSrv.getEvents().subscribe({
      next: events => {
        this.events = events.events
      },
      error: err=>console.log(err)
    })
  }

  //crear evento
  createEvent() {
    
    Swal.fire('Error', 'No se pueden crear eventos', 'error');
  }
}
