import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../sidebar/tabs/projects-tab/projects-tab.component';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent implements OnInit {
  @Input()
  data = {} as Project;
  constructor() {}

  ngOnInit(): void {}

  getImage(img: string) {
    return img
      ? '/assets/images/' + img + '.jpg'
      : '/assets/images/placeholder.jpg';
  }
}
