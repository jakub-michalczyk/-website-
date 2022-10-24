import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  sidebarOpen = false;
  loaded = false;

  constructor(private cdr: ChangeDetectorRef) {}

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.loaded = true;
      this.cdr.detectChanges();
    }, 500);
  }
}
