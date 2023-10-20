import { ChangeDetectorRef, Component } from '@angular/core';
import { SidebarService } from 'src/global/sidebar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  loaded = false;
  sidebarOpen = false;

  constructor(
    private cdr: ChangeDetectorRef,
    private sidebarService: SidebarService
  ) {
    this.sidebarService.sidebarOpen.subscribe((val) => {
      this.sidebarOpen = val;
    });
  }

  toggle() {
    this.sidebarService.toggleSidebar();
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.loaded = true;
      this.cdr.detectChanges();
    }, 500);
  }
}
