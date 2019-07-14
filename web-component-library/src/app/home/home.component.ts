import { Component, OnInit } from '@angular/core';
import { ILoadingBtn } from '../shared/components/loading-btn/loading-btn.model';
import { ILoadingBorder } from '../shared/components/loading-btn/loading-border.model';


@Component({
  selector: 'wcl-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor() { }

  loadingBorder: ILoadingBorder = {
    id: 'home-loading-border',
    class: '',
    borderRadius: '3px',
    borderSize: '',
    mainColor: 'blue',
    subColor: ''
  };

  loadingBtn: ILoadingBtn = {
    id: 'home-btn-loader',
    title: 'Super Awesome loading Button',
    class: 'bg-color-white', // always provide a background color for the button
    value: 'Loading Btn Component'
  }

  ngOnInit() { }
}



