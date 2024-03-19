import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/service/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public imgUrl = '';
  public user: User;
  public url = '';
  constructor(  private router:Router,
                private authSrv:AuthService ) { 
                
                  this.user =  this.authSrv.userData$;
                  this.url = this.user.getImgUrl;
                  
                  this.imgUrl='http://localhost:3000/api/upload/usuarios/';
                  
                }
  
 
  
  ngOnInit(): void {
   
  }

  onLogOut() {
    this.authSrv.logOut();
  }

}
