import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  sidebarOpen = new Subject<boolean>();
  open = false;
  constructor() {}

  toggleSidebar() {
    this.open = !this.open;
    this.sidebarOpen.next(this.open);
  }
}
