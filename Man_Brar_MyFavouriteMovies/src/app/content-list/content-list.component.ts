import { Component, Input, OnInit} from '@angular/core';
import { Content} from '../helper-files/content-interface';
import { MovieServiceService} from '../movie-service.service';
import { MessageService} from '../message.service';
@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  
  
    contentList: any[];
    item:any;
    constructor(private movieService: MovieServiceService , 
     public messageService : MessageService){
   
    }
  title : string='';
  searchResult : boolean = false;
  message : string = '';

  findTitle(){
      this.searchResult = this.contentList.some(content => content.title.toLowerCase() === this.title.toLowerCase());

      if (this.searchResult){
        this.message= "title Exist";
      }
      else{
        this.message =" title does not exist";
      }
  }

  receiveNewContent(newContent: any): void {
    // Add the new content item to the content list
    console.log("newContent",newContent);
    this.contentList.push(newContent);
    console.log('contentListArray',this.contentList);
  }

  ngOnInit(){
    this.movieService.getContent().subscribe((contentList: any[])=>
    {
      this.contentList = contentList;
    })
    
    const id = 4;
  this.movieService.getContentById(id).subscribe((singleContent: any)=>
  {
    this.item = singleContent;
  })
}
}
