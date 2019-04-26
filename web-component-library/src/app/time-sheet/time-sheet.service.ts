import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { PAY_PERIOD_OPTIONS, TIME_SHEET_TABS, TIME_SHEET_ACTION_BAR_BTNS, TIME_SHEET_DATA, EMPOLYEE_DATA } from '../shared/sample.data';

@Injectable({
  providedIn: 'root',
})
export class TimeSheetService {
  constructor() { }

  getSelectOptions() {
    return of(PAY_PERIOD_OPTIONS);
  }

  getTabs() {
    return of(TIME_SHEET_TABS);
  }

  getActionBarBtns() {
    return of(TIME_SHEET_ACTION_BAR_BTNS);
  }

  getTimeSheetData(paramId) {
    let res = TIME_SHEET_DATA.find(x => x.payPeriodId === paramId);

    return of(res);
  }

  getEmployeeData() {
    return of(EMPOLYEE_DATA);
  }

}
