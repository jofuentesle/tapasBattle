import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public imgUrl = '';

  constructor(  private router:Router,
                private authSrv:AuthService ) { 

                  this.getUrl();

                }

  getUrl = async () => {

    this.imgUrl = await this.authSrv.userData$.getImgUrl;
    console.log(this.imgUrl);

  }
  ngOnInit(): void {
    this.getUrl();
  }

  onLogOut() {
    this.authSrv.logOut();
  }

}
