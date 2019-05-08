import { Component, OnInit } from '@angular/core';
import { NavbarService } from './navbar.service';
import { INavItem } from './nav-bar.model';

@Component({
  selector: 'wcl-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  navItems: INavItem[];

  constructor(private service: NavbarService) { }

  ngOnInit() {
    this.getNavItems();
  }

  getNavItems() {
    this.service.getNavItems().subscribe((res) => {
      this.navItems = res;
    })
  }
}
