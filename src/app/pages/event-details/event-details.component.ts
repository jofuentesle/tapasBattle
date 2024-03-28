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
   idEvent:string;
   public formSubmitted = true;



  constructor(  private auth:AuthService,
                private eSrv: EventsService,
                private router: Router,
                private route: ActivatedRoute,
                private fb:FormBuilder,) { }

  //Obtener id
  async getId() {
  //Obtenemos id url
  await this.route.paramMap.subscribe(params => {
    
    this.idEvent = params.get("uid");
    console.log(this.idEvent)
    });
    this.getEventById(this.idEvent)
 }              

  async getEventById(idEvent) {

      this.currentEvent = this.eSrv.getEventById(idEvent).subscribe({
      next: events => {
        
        //Swal.fire('Evento creado con éxito', events.nombre, 'success');
        this.currentEvent = events.events;
        console.log('hola',this.currentEvent);
        

        //this.router.navigateByUrl(`/dashboard/event-details/${ events.uid }`);
      },
      
        error: err=>{
          Swal.fire('Error', err, 'error')
        }
    })

  }

//Obtenemos usuarios
async  getUsers () {

    this.allUsers = this.auth.getAllUser().subscribe({
      next: (res:any) => {
        this.allUsers = res.usuarios;
      },
      error: err=>console.log(err)}
      )}



  ngOnInit(): void {

    this.getUsers();
    this.getId()
  }

}
