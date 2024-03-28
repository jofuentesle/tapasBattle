import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/service/auth.service';
import { EventsService } from 'src/app/service/events.service';

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
   public formSubmitted = true;



  constructor(  private auth:AuthService,
                private eSrv: EventsService,
                private router: Router,
                private route: ActivatedRoute,
                private fb:FormBuilder,) { }

  async getEventById() {

      
      this.currentEvent = this.eSrv.getEventById('').subscribe({
      next: events => {
        
        //Swal.fire('Evento creado con éxito', events.nombre, 'success');
        this.currentEvent = events.eventsById;
        console.log(this.currentEvent);
        

        //this.router.navigateByUrl(`/dashboard/event-details/${ events.uid }`);
      },
      
        error: err=>{
          Swal.fire('Error', err, 'error')
        }
    })

  }

async  getUsers () {

    this.allUsers = this.auth.getAllUser().subscribe({
      next: (res:any) => {
        this.allUsers = res.usuarios;
        console.log(this.allUsers);
      },
      error: err=>console.log(err)}
      )}



  ngOnInit(): void {

    this.getEventById();
    this.getUsers();
  }

}
