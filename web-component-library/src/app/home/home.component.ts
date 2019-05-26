import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wcl-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isActive: boolean = false;
  constructor() { }

  ngOnInit() { }
}
