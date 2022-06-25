import { Component, OnInit } from '@angular/core';

export namespace NContent {
  export interface ContentData {
    title: string;
    chartLinesLength: number;
    companies: CompanyData[];
  }

  export interface CompanyData {
    id: number;
    name: string;
    city: string;
    markerPosition?: EMarkerPosition;
    skills: SkillData[];
    exist: boolean;
  }

  export interface SkillData {
    name: string;
    img: string;
  }
}

enum EMarkerPosition {
  First = 0,
  Second = 1,
  Third = 2,
  Fourth = 3,
  Fifth = 4,
  Sixth = 5,
  Seventh = 6,
  Eighth = 7,
  Ninth = 8,
  Tenth = 9,
}

@Component({
  selector: 'app-experience-tab',
  templateUrl: './experience-tab.component.html',
  styleUrls: ['./experience-tab.component.scss'],
})
export class ExperienceTabComponent implements OnInit {
  positions = EMarkerPosition;
  hideTechnologiesList = false;
  content: NContent.ContentData = {
    title: 'experience',
    chartLinesLength: 10,
    companies: [
      {
        id: 0,
        name: 'Selea',
        city: 'Ruda Śląska',
        markerPosition: this.positions.First,
        skills: [
          { name: 'WordPress', img: 'wordpress' },
          { name: 'HTML5', img: 'html' },
        ],
        exist: true,
      },
      {
        id: 1,
        name: 'Tom&Co',
        markerPosition: this.positions.Second,
        city: 'Katowice',
        exist: true,
        skills: [
          { name: 'HTML5', img: 'html' },
          { name: 'SCSS', img: 'sass' },
          { name: 'Typescript', img: 'typescript' },
          { name: 'Angular', img: 'angular' },
        ],
      },
    ],
  } as NContent.ContentData;
  companyData: NContent.CompanyData = this.content.companies[1];

  constructor() {
    let length = this.content.chartLinesLength - this.content.companies.length;
    for (let i = 0; i < length; i++) {
      this.content.companies.push({
        id: i + 2,
        name: '',
        city: '',
        exist: false,
        markerPosition: undefined,
        skills: [],
      });
    }
  }

  ngOnInit(): void {}

  get markerPosition() {
    let positions = ['first-company', 'second-company'];

    return this.companyData.markerPosition
      ? positions[this.companyData.markerPosition]
      : positions[0];
  }

  showCompanyData(data: NContent.CompanyData) {
    if (data.name && data.city) {
      this.hideTechnologiesList = true;

      setTimeout(() => {
        this.hideTechnologiesList = false;

        //Company Exists
        this.companyData = this.content.companies[data.id];
      }, 750);
    }
  }
}
