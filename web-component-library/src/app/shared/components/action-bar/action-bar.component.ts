import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IActionBarBtns } from './action-bar.model';

@Component({
  selector: 'wcl-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.scss']
})
export class ActionBarComponent implements OnInit {
  @Input() actionBarBtns: IActionBarBtns[];
  @Output() actionBarBtnEvent = new EventEmitter();

  constructor() { }

  ngOnInit() { }
}
