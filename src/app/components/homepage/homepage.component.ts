import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/global/sidebar.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  constructor(private sidebarService: SidebarService) {}

  ngOnInit(): void {}

  toggle() {
    this.sidebarService.toggleSidebar();
  }
}
