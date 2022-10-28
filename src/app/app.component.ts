import { Component } from '@angular/core';



export interface Card
 {
  title: string;
  text: string
 }
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  toogle = true

  cards: Card[] = [
    {title: 'Card', text: 'This is card number 1'},
    {title: 'Card', text: 'This is card number 2'},
    {title: 'Card', text: 'This is card number 3'},
    {title: 'Card', text: 'This is card number 4'},
    {title: 'Card', text: 'This is card number 5'}
  ]

  toggleCards() {
    this.toogle = !this.toogle
  }
}
