import { Component, OnInit } from '@angular/core';

import { User } from 'src/app/models/user.model';
import { Event } from 'src/app/models/events.model';

import { AuthService } from 'src/app/service/auth.service';
import { EventsService } from 'src/app/service/events.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public currentUser: User;
  public eventsByUserId:any;
  public onLoad:Boolean = false;

  constructor(  public eventSrv: EventsService, 
                public authSrv:AuthService ) { 

                  //obtenemos usuario logeado
                  this.currentUser = this.authSrv.userData$

                  //Obtenemos eventos con su id usuario
                  this.eventsByUserId = this.eventSrv.getEvents()
                  .subscribe( res => {
  
                    this.eventsByUserId = res.events.filter((x) => x.eventPlanerId === this.currentUser.uid)
                    
                    this.onLoad = true;

                  });                    
            }

  ngOnInit(): void {
    

  }

}
