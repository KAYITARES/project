import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes = [
    new Quote("Imana ni byose","Byose Bihira Abakunda IMANA","kayitare",new Date(2019,0,26)),
    new Quote("care for your life","“I'm selfish, impatient and a little insecure. `I make mistakes, I am out of control and at times hard to handle.` But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”","Marilyn Monroe",new Date(2019,0,26)),
    new Quote("be yours","“Be yourself; everyone else is already taken.” ","Oscar Wilde",new Date(2019,0,26)),
    new Quote("universe","“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.” "," Albert Einstein",new Date(2019,0,26)),
    new Quote("feelings","“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.” "," Bernard M. Baruch",new Date(2019,0,26)),
  ]

  completeQuote(isComplete,index){
    if (isComplete){
        let toDelete=confirm(`Are you sure you want to delete ${this.quotes[index].title}`)
      if(toDelete){
        this.quotes.splice(index,1);
      }
    }
  }
  toogleDetails(index){
    this.quotes[index].showAuthor = !this.quotes[index].showAuthor;
  }
  constructor() { }

  ngOnInit() {
  }

}
