import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Quote } from '../quote';


@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
  @Input() quote:Quote;
  @Output() isComplete= new EventEmitter<boolean>();
  quoteComplete(complete:boolean){
    this.isComplete.emit(complete);
  }
  public upvote:number=0;
  upvotes(upvote){
    this.upvote+=1;
  }
  public downvote:number=0;
  downvotes(downvote){
    this.downvote+=1;
  } 


  constructor() { }

  ngOnInit() {
  }

}
