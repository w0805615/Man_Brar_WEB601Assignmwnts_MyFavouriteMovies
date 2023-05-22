import { Component,  Input, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit{
  clickEvent(){
      console.log(this.content.id, this.content.title)
  }
  @Input() content : Content;
  ngOnInit(){

  }
  
}