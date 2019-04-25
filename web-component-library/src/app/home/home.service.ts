import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { PAY_PERIOD_OPTIONS, HOME_TABS, HOME_ACTION_BAR_BTNS } from '../shared/sample.data';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor() { }

  getSelectOptions() {
    return of(PAY_PERIOD_OPTIONS);
  }

  getTabs() {
    return of(HOME_TABS);
  }

  getActionBarBtns() {
    return of(HOME_ACTION_BAR_BTNS);
  }
}
