import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/service/events.service';

import { Event } from '../../models/events.model';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public events;
  public test;

  constructor( private eventsSrv:EventsService ) { }

  ngOnInit(): void {
    this.onLoadEvents();
  }

  //cargamos eventos
  async onLoadEvents() {
    await this.eventsSrv.getEvents().subscribe( res => {
      this.events = res;
      this.test = this.events.events;
      console.log(this.test);
    })
  }


}
