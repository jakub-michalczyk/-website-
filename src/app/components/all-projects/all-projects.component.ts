import { Component, OnChanges, OnInit } from '@angular/core';
import { Project } from '../sidebar/tabs/projects-tab/projects-tab.component';
import { SidebarService } from 'src/global/sidebar.service';

@Component({
  selector: 'app-all-projects',
  templateUrl: './all-projects.component.html',
  styleUrls: ['./all-projects.component.scss'],
})
export class AllProjectsComponent {
  projects: Project[] = [
    {
      name: 'bookish',
      link: 'https://github.com/jakub-michalczyk/bookish',
    },
    {
      name: 'video-finder',
      link: 'https://video-finder.netlify.app/',
      available: true,
    },
    {
      name: 'revice',
      link: 'https://github.com/jakub-michalczyk/revice',
    },
    {
      name: 'guess-this-artist',
      link: 'https://guess-this-artist.netlify.app/start',
      available: true,
    },
    {
      name: 'website',
      link: 'https://jakubmichalczyk.pl/',
      available: true,
    },
    {
      name: 'quiz',
      link: 'https://github.com/jakub-michalczyk/Quiz-App',
    },
    {
      name: 'card-memory',
      link: 'https://github.com/jakub-michalczyk/Card-memory',
    },
    {
      name: 'evolution',
      link: 'https://github.com/jakub-michalczyk/Evolution',
    },
    {
      name: 'financer',
      link: 'https://github.com/jakub-michalczyk/Financer',
    },
    {
      name: 'deliciae',
      link: 'https://github.com/jakub-michalczyk/Deliciae',
    },
    {
      name: 'tubedit',
      link: 'https://github.com/jakub-michalczyk/Tubedit',
    },
    {
      name: 'crime',
      link: 'https://github.com/jakub-michalczyk/Crime',
    },
    {
      name: 'calendation',
      link: 'https://github.com/jakub-michalczyk/Calendation',
    },
    {
      name: 'tanky',
      link: 'https://github.com/jakub-michalczyk/Tanky',
    },
    {
      name: 'barber-template',
      link: 'https://github.com/jakub-michalczyk/barber-template',
    },
    {
      name: 'filmer',
      link: 'https://github.com/jakub-michalczyk/Filmer',
    },
  ];
}
