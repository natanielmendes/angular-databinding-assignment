import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  private counterInterval;
  number: number = 0;
  @Output('counter') counter: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  onStart() {
    this.counterInterval = setInterval(() => {
      // console.log(this.number);
      this.counter.emit(this.number);
      this.number++;
    }, 1000)
  }

  onStop() {
    clearInterval(this.counterInterval);
  }

}
