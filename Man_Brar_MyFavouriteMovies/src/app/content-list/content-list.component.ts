import { Component, Input, OnInit} from '@angular/core';
import { Content} from '../helper-files/content-interface';
@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  ngOnInit(){}
  contentList:Content[] = [
    {
          id: 1,
          title: 'Angrej',
          description: 'This is my favorite punjabi movie. Angrej ( Amrinder Gill ), an older adult from India, arrives at his pre-partition home in Pakistan, where he meets the current residents.',
          creator: 'Jaspal Sandhu',
          imgURL: 'assets/img/img1.jpg',
          tags: ['Amrinder Gill'],
          type: 'Comedy'

    },
    {
      id: 2,
      title: 'Love Punjab',
      description: 'The story of Love Punjab revolves around a family in which husband and wife fights daily for small reasons and their son is only victim of these fights.',
      creator: 'Sandeep Singh',
      imgURL: '',
      tags: ['Amrinder Gill', 'Punjabi movie'],
      type: 'Comedy'

    },
    {
      id: 3,
      title: 'Chal Mera Putt',
      description: 'Chal Mera Putt is a light-hearted comedy about a group of illegal immigrants living in the city of Birmingham.',
      creator: 'Gurcharan Singh',
      imgURL: 'assets/img/CMP.jpg',
     tags: ['Funny', 'Punjabi'],
     type: 'Comedy'
    },
    {
      id: 4,
      title: 'Chal Mera Putt 2',
      description: 'Chal Mera Putt is a light-hearted comedy about a group of illegal immigrants living in the city of Birmingham.',
      creator: 'Gurcharan Singh',
      imgURL: 'assets/img/jodi.jpg',
     tags: ['Funny'],
     type: 'Drama'
    },
    {
      id: 5,
      title: 'Ardass',
      description: 'The movie revolves around Master Gurmukh (Gurpreet Ghuggi) and how he arrives in a new village as this posting in government school and helping various villagers by reminding them of their good values and teaching them more meanwhile facing his own inner guilt.',
      creator: 'Gippy Grewal',
      imgURL: 'assets/img/Ardass.jpg',
     tags: ['Religious'],
     type: 'Drama'
    },
    {
      id: 6,
      title: 'Jodi',
      description: 'Set in the vibrant and culturally rich backdrop of Punjab in the 1980s, "Jodi" is a musical drama that weaves together the fictional tale of two talented and passionate artists on a journey to redefine the Punjabi folk music scene.',
      creator: 'Amberdeep Singh',
      imgURL: 'assets/img/CMP.jpg',
     tags: ['Musical Drama'],
     type: 'Drama'
    },
    {
      id: 7,
      title: 'Jodi2',
      description: 'Set in the vibrant and culturally rich backdrop of Punjab in the 1980s, "Jodi" is a musical drama that weaves together the fictional tale of two talented and passionate artists on a journey to redefine the Punjabi folk music scene.',
      creator: 'Amberdeep Singh',
      imgURL: 'assets/img/CMP.jpg',
     tags: ['Comedy', 'Musical Drama'],
     type: ''
    }
  ]

  title : string='';
  searchResult : boolean = false;
  message : string = '';

  findTitle(){
      this.searchResult = this.contentList.some(content => content.title.toLowerCase() === this.title.toLowerCase())

      if (this.searchResult){
        this.message= "title Exist";
      }
      else{
        this.message =" title does not exist";
      }
  }
}
