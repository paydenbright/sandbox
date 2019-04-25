import { Component, OnInit } from '@angular/core';
import { ITabs } from '../shared/components/tabs/tabs.model';
import { IPayPeriodOptions } from './home.model';
import { HomeService } from './home.service';
import { IActionBarBtns } from '../shared/components/action-bar/action-bar.model';

@Component({
  selector: 'wcl-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  tabs: ITabs[];
  actionBarBtns: IActionBarBtns[];
  options: IPayPeriodOptions[];

  constructor(private service: HomeService) { }

  ngOnInit() {
    this.getSelectOptions();
    this.getTabs();
    this.getActionBarBtns();
  }

  tabChange(tab) {
    console.log(tab);
  }

  btnClick(btn) {
    console.log(btn);
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
}
