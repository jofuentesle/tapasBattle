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
    this.getEventId( this.idEvent );
    this.idEvent = this.route.snapshot.params[id];
    console.log(this.idEvent);
  }

  getEventId ( idEvent ) {
    console.log(idEvent);
    this.eventSrv.getEventById(idEvent).subscribe(res => {
      console.log('Evento', res);
    })

  }

}
