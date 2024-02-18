import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventsService } from 'src/app/service/events.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  public idEvent: string;

  constructor(  private eventSrv:EventsService,
                private route: ActivatedRoute) { }

  ngOnInit(): void {

    let id="65d23cca5c3561bfd95d991d";
  }

  getEventId ( event:any ) {
    let id="65d23cca5c3561bfd95d991d";

    this.eventSrv.getEventById(id).subscribe(res => {
      console.log('Evento', res);
    })

  }

}
