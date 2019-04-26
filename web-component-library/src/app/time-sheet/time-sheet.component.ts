import { Component, OnInit } from '@angular/core';
import { ITabs } from '../shared/components/tabs/tabs.model';
import { IPayPeriodOptions, ITimeSheetData } from './time-sheet.model';
import { TimeSheetService } from './time-sheet.service';
import { IActionBarBtns } from '../shared/components/action-bar/action-bar.model';
import { IEmployeeDetails } from '../shared/models/employee-details.model';

@Component({
  selector: 'wcl-time-sheet',
  templateUrl: './time-sheet.component.html',
  styleUrls: ['./time-sheet.component.scss'],
})
export class TimeSheetComponent implements OnInit {
  tabs: ITabs[];
  actionBarBtns: IActionBarBtns[];
  options: IPayPeriodOptions[];
  timeSheetData: ITimeSheetData;
  employeeData: IEmployeeDetails[];
  selectedValue = null;

  constructor(private service: TimeSheetService) { }

  ngOnInit() {
    this.getSelectOptions();
    this.getTabs();
    this.getActionBarBtns();
  }

  tabChange(tab) {
  }

  btnClick(btn) {
  }

  getSelectOptions() {
    this.service.getSelectOptions().subscribe(res => {
      this.options = res;
    });
  }

  getTabs() {
    this.service.getTabs().subscribe(res => {
      this.tabs = res;
    });
  }

  getActionBarBtns() {
    this.service.getActionBarBtns().subscribe(res => {
      this.actionBarBtns = res;
    });
  }

  getTimeSheetData(paramId) {
    this.service.getTimeSheetData(paramId).subscribe(res => {
      this.timeSheetData = res;
    })
  }

  getEmployeeData() {
    this.service.getEmployeeData().subscribe(res => {
      this.employeeData = res;
    })
  }
}
