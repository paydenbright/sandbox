import { Component, OnInit, Input } from '@angular/core';
import { ITabs } from '../tabs.model';
import { IActionBarBtns } from '../../action-bar/action-bar.model';

@Component({
  selector: 'wcl-tabs-selected-content',
  templateUrl: './tabs-selected-content.component.html',
  styleUrls: ['./tabs-selected-content.component.scss'],
})
export class TabsSelectedContentComponent implements OnInit {
  @Input() tabs: ITabs;
  @Input() actionBarBtns: IActionBarBtns[];

  constructor() { }

  ngOnInit() { }

  actionBarBtnClick(btn) {
    console.log(btn);
  }
}
