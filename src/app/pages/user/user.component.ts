import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/service/auth.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public currentUser: User;

  constructor( public authSrv:AuthService ) { 

  }

  ngOnInit(): void {
    //obtenemos usuario logeado
    this.currentUser = this.authSrv.userData$;

  }

}
