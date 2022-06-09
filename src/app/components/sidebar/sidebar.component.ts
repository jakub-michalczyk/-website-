import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  animations: [
    trigger('openClose', [
      // ...
      state(
        'open',
        style({
          transform: 'translateX(100%)',
        })
      ),
      state(
        'closed',
        style({
          transform: 'translateX(0%)',
        })
      ),
      transition('open => closed', [animate('0.1s')]),
      transition('closed => open', [animate('0.1s')]),
    ]),
  ],
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  @Input() isOpen = false;
  listHidden = false;
  contentHidden = true;
  choosedTab?: string;

  contentToggle(tab?: string) {
    this.listHidden = !this.listHidden;
    this.contentHidden = !this.contentHidden;

    if (tab) {
      this.choosedTab = tab;
    }
  }
}
