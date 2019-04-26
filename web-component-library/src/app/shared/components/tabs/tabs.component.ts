import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ITabs } from './tabs.model';
import { IActionBarBtns } from '../action-bar/action-bar.model';
import { ITimeSheetData } from 'src/app/time-sheet/time-sheet.model';
import { IEmployeeDetails } from '../../models/employee-details.model';

@Component({
  selector: 'wcl-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit {
  @Input() tabs: ITabs[];
  @Input() actionBarBtns: IActionBarBtns[];
  @Input() timeSheetData: ITimeSheetData[];
  @Input() employeeData: IEmployeeDetails[];
  @Output() tabChangeEvent = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  tabChangeHandler(tab) {
    if (tab.isSelected) {
      return;
    } else {
      for (let i = 0; i < this.tabs.length; i++) {
        const item = this.tabs[i];

        item.isSelected = false;
      }
    }

    tab.isSelected = true;
    this.tabChangeEvent.emit(tab);
  }
}
