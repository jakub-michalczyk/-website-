import {
  ChangeDetectorRef,
  Component,
  OnInit,
  AfterViewInit,
} from '@angular/core';

interface Projects {
  name: string;
  link?: string;
}

@Component({
  selector: 'app-projects-tab',
  templateUrl: './projects-tab.component.html',
  styleUrls: ['./projects-tab.component.scss'],
})
export class ProjectsTabComponent implements OnInit, AfterViewInit {
  loaded = false;
  projects: Projects[] = [
    {
      name: 'guess-this-artist',
      link: 'https://guess-this-artist.netlify.app/start',
    },
    { name: 'website', link: 'https://jakubmichalczyk.netlify.app/' },
    { name: 'video-finder', link: 'https://video-finder.netlify.app/' },
    { name: '', link: '' },
  ];

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    setTimeout(() => {
      this.loaded = true;
      this.cdr.detectChanges();
    }, 500);
  }

  getImage(img: string) {
    return img
      ? '/assets/images/' + img + '.jpg'
      : '/assets/images/placeholder.jpg';
  }
}
