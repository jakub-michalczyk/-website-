import {
  ChangeDetectorRef,
  Component,
  OnInit,
  AfterViewInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { SidebarService } from 'src/global/sidebar.service';

export interface Project {
  name: string;
  link?: string;
  available?: boolean;
}

@Component({
  selector: 'app-projects-tab',
  templateUrl: './projects-tab.component.html',
  styleUrls: ['./projects-tab.component.scss'],
})
export class ProjectsTabComponent implements OnInit, AfterViewInit {
  loaded = false;
  projects: Project[] = [
    {
      name: 'guess-this-artist',
      link: 'https://guess-this-artist.netlify.app/start',
      available: true,
    },
    {
      name: 'website',
      link: 'https://jakubmichalczyk.netlify.app/',
      available: true,
    },
    {
      name: 'video-finder',
      link: 'https://video-finder.netlify.app/',
      available: true,
    },
    {
      name: 'revice',
      link: 'https://github.com/jakub-michalczyk/revice',
      available: false,
    },
  ];

  constructor(
    private cdr: ChangeDetectorRef,
    private sidebarService: SidebarService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    setTimeout(() => {
      this.loaded = true;
      this.cdr.detectChanges();
    }, 500);
  }

  openAllProjects() {
    this.sidebarService.toggleSidebar();
    this.router.navigate(['/all-projects']);
  }
}
