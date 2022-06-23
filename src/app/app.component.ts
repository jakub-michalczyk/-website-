import { ChangeDetectorRef, Component } from '@angular/core';
export interface Heading {
  firstLine: string;
  secondLine: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  sidebarOpen = false;
  loaded = false;
  heading: Heading = {
    firstLine: "hi, i'm jacob",
    secondLine: 'a front-end developer',
  };

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
