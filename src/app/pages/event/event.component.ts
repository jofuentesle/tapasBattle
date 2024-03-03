import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventsService } from 'src/app/service/events.service';

import { TapaComponent } from '../tapa/tapa.component';

import { Event } from '../../models/events.model';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  public idEvent: string;
  public event:Event;
  public onLoad:Boolean = false;

  constructor(  private eventSrv:EventsService,
                private route: ActivatedRoute,
                private router: Router) { }

  ngOnInit(): void {
   
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

}
