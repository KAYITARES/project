import { Component } from '@angular/core';
import{Quote} from './quote'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  
  
})
export class AppComponent {
    quotes = [
      new Quote("Kayitare","Imana ni byose","Byose Bihira Abakunda IMANA","kayitare",new Date(2019,0,26)),
      new Quote("Kayitare","care for your life","“I'm selfish, impatient and a little insecure. `I make mistakes, I am out of control and at times hard to handle.` But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”","Marilyn Monroe",new Date(2019,0,26)),
      new Quote("Kayitare","be yours","“Be yourself; everyone else is already taken.” ","Oscar Wilde",new Date(2019,0,26)),
      new Quote("Kayitare","universe","“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.” "," Albert Einstein",new Date(2019,0,26)),
      new Quote("Kayitare","feelings","“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.” "," Bernard M. Baruch",new Date(2019,0,26)),
    ]
 
}
