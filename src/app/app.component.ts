import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  numbersArr = [];

  onIncrement(number: number) {
    this.numbersArr.push(number);
    console.log(number)
  }

}
