import { Injectable } from '@angular/core';
import { NAV_ITEMS } from './nav-bar.data';
import { of, Observable } from 'rxjs';
import { INavItem } from './nav-bar.model';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  constructor() { }

  getNavItems(): Observable<INavItem[]> {
    return of(NAV_ITEMS);
  }
}
