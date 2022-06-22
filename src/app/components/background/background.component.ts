import { Component, Input } from '@angular/core';
import { Heading } from 'src/app/app.component';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss'],
})
export class BackgroundComponent {
  @Input() heading = {} as Heading;
  constructor() {}
}
