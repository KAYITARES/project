import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes = [
    new Quote(1,"Byose Bihira Abakunda IMANA","kayitare"),
    new Quote(2,"“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”","Marilyn Monroe"),
    new Quote(3,"“Be yourself; everyone else is already taken.” ","Oscar Wilde"),
    new Quote(4,"“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.” "," Albert Einstein"),
    new Quote(5,"“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.” "," Bernard M. Baruch"),
  ]
  constructor() { }

  ngOnInit() {
  }

}
