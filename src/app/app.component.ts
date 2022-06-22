import { Component } from '@angular/core';
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
  heading: Heading = {
    firstLine: "hi, i'm jacob",
    secondLine: 'a front-end developer',
  };

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }
}
