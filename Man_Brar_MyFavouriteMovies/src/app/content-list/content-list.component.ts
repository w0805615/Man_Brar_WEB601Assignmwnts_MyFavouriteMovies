import { Component } from '@angular/core';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent {
  contentList = [
    {
          id: 1,
          title: 'Angrej',
          description: 'This is my favorite punjabi movie. Angrej ( Amrinder Gill ), an older adult from India, arrives at his pre-partition home in Pakistan, where he meets the current residents.',
          creator: 'Jaspal Sandhu',
          imgURL: 'assets/img/img1.jpg',
          tags: ['Comedy']

    },
    {
      id: 2,
      title: 'Love Punjab',
      description: 'The story of Love Punjab revolves around a family in which husband and wife fights daily for small reasons and their son is only victim of these fights.',
      creator: 'Sandeep Singh',
      imgURL: 'assets/img/lovepunjab.jpg',
      tags: ['Comedy', 'Drama']

    },
    {
      id: 3,
      title: 'Chal Mera Putt',
      description: 'Chal Mera Putt is a light-hearted comedy about a group of illegal immigrants living in the city of Birmingham.',
      creator: 'Gurcharan Singh',
      imgURL: 'assets/img/CMP.jpg',
     tags: ['Comedy', 'Drama']

    },
    {
      id: 4,
      title: 'Chal Mera Putt 2',
      description: 'Chal Mera Putt is a light-hearted comedy about a group of illegal immigrants living in the city of Birmingham.',
      creator: 'Gurcharan Singh',
      imgURL: 'assets/img/CMP.jpg',
     tags: ['Comedy', 'Drama']

    },
    {
      id: 5,
      title: 'Ardass',
      description: 'The movie revolves around Master Gurmukh (Gurpreet Ghuggi) and how he arrives in a new village as this posting in government school and helping various villagers by reminding them of their good values and teaching them more meanwhile facing his own inner guilt.',
      creator: 'Gippy Grewal',
      imgURL: 'assets/img/CMP.jpg',
     tags: ['Drama']

    },
    {
      id: 6,
      title: 'Jodi',
      description: 'Set in the vibrant and culturally rich backdrop of Punjab in the 1980s, "Jodi" is a musical drama that weaves together the fictional tale of two talented and passionate artists on a journey to redefine the Punjabi folk music scene.',
      creator: 'Amberdeep Singh',
      imgURL: 'assets/img/CMP.jpg',
     tags: ['Comedy', 'Musical Drama']
    }
  ]

  getContentHtml(index: number): string {
    const content = this.contentList[index];
    const imgHtml = content.imgURL ? `<img src="${content.imgURL}" alt="${content.title}" />` : '';
    return `
      <div style="border:1px;">
        <h2>${content.title}</h2>
        <p>${content.description}</p>
        <p>Creator: ${content.creator}</p>
        ${imgHtml}
        <p>Tags: ${content.tags}</p>
      </div>
    `;
  }


}
