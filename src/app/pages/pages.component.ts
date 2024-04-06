import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-page',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css'],

})
export class PagesComponent implements OnInit {

  public onLoad:Boolean = false;

  constructor() { }

  ngOnInit(): void {

    this.onLoad = true;
  }

}
