import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IActionBarBtns } from './action-bar.model';
import { IEmployeeDetails } from '../../models/employee-details.model';

@Component({
  selector: 'wcl-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.scss']
})
export class ActionBarComponent implements OnInit {
  @Input() actionBarBtns: IActionBarBtns[];
  @Input() employeeData: IEmployeeDetails;
  @Output() actionBarBtnEvent = new EventEmitter();
  selectedToggle: boolean = false;
  expandedToggle: boolean = false;

  constructor() { }

  ngOnInit() { }

  actionBtnClick(event) {
    switch (event.id) {
      case 'abb-id-0':
        this.selectedToggle = !this.selectedToggle;
        break;
      case 'abb-id-1':
        this.expandedToggle = !this.expandedToggle;
        break;
      case 'abb-id-2':
        break;

      default:
        break;
    }

    this.actionBarBtnEvent.emit(event);
  }
}
