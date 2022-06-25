import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects-tab',
  templateUrl: './projects-tab.component.html',
  styleUrls: ['./projects-tab.component.scss'],
})
export class ProjectsTabComponent implements OnInit {
  loaded = false;
  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    setTimeout(() => {
      this.loaded = true;
      this.cdr.detectChanges();
    }, 500);
  }
}
