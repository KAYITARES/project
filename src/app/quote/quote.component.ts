import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes = [
    new Quote("Kayitare","care for your life","“I'm selfish, impatient and a little insecure. `I make mistakes, I am out of control and at times hard to handle.` But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”","Marilyn Monroe",0,0,new Date(2019,0,26)),
    new Quote("Kayitare","feelings","“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.” "," Bernard M. Baruch",0,0,new Date(2019,0,26)),
    new Quote("Kayitare","Imana ni byose","Byose Bihira Abakunda IMANA","kayitare",0,0,new Date(2019,0,26)),
    new Quote("Kayitare","universe","“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.” "," Albert Einstein",0,0,new Date(2019,0,26)),
    new Quote("Kayitare","be yours","“Be yourself; everyone else is already taken.” ","Oscar Wilde",0,0,new Date(2019,0,26)),
  ]
  addNewQuote(quote){
    let quoteLength=this.quotes.length;
    quote.id=quoteLength+1;
    quote.completeDate= new Date(quote.completeDate)
    this.quotes.push(quote)
  }

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
