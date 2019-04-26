import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ITabs } from '../tabs.model';
import { IActionBarBtns } from '../../action-bar/action-bar.model';
import { ITimeSheetData } from 'src/app/time-sheet/time-sheet.model';
import { IEmployeeDetails } from 'src/app/shared/models/employee-details.model';

@Component({
  selector: 'wcl-tabs-selected-content',
  templateUrl: './tabs-selected-content.component.html',
  styleUrls: ['./tabs-selected-content.component.scss'],
})
export class TabsSelectedContentComponent implements OnInit {
  @Input() tabs: ITabs;
  @Input() employeeData: IEmployeeDetails[];
  @Input() timeSheetData: ITimeSheetData[];
  @Input() actionBarBtns: IActionBarBtns[];
  @Output() expandedAllEvent = new EventEmitter;
  @Output() selectedAllEvent = new EventEmitter;

  expandedToggleAll: boolean = false;
  selectedToggleAll: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  actionBarBtnClick(btn) {
    switch (btn.id) {
      case 'abb-id-0':
        this.selectAll();
        break;
      case 'abb-id-1':
        this.expandAll();
        break;
      case 'abb-id-2':
        alert(btn.name + " button was clicked. Functionality is still under construction");
        break;

      default:
        break;
    }
  }

  loopy(param: boolean, action) {
    for (let i = 0; i < this.employeeData.length; i++) {
      const item = this.employeeData[i];

      if (action === "select") {
        item.isSelected = param;
      }

      if (action === "expand") {
        item.isExpanded = param;
      }
    }
  }

  selectAll() {
    this.selectedToggleAll = !this.selectedToggleAll;

    this.selectedAllEvent.emit();

    this.loopy(this.selectedToggleAll, "select");
  }

  expandAll() {
    this.expandedToggleAll = !this.expandedToggleAll;

    this.expandedAllEvent.emit();

    this.loopy(this.expandedToggleAll, "expand");
  }
}
