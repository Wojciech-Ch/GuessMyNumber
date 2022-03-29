import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  number: number = Math.trunc(Math.random() * 20 + 1);
  score: number = 20;
  hiScore: number = 0;
  guess: number = 0;
  message: string = 'Start guessing...';
  win: any = '?';
  winBackground: boolean = false;

  playGame() {
    console.log(this.guess);
    console.log();
    if (this.guess > this.number) {
      this.message = 'Too High😒';
      this.score--;
    } else if (this.guess < this.number) {
      this.message = 'Too Low😢';
      this.score--;
    } else if (this.guess === this.number) {
      this.message = 'Good Joob, Correct number 🔥🔥🔥';
      this.score = this.hiScore;
      this.win = this.guess;
      this.winBackground = true;
    }
  }

  newGame() {
    this.score = 20;
    this.number = Math.trunc(Math.random() * 20 + 1);
    this.message = 'Start guessing...';
    this.score = 0;
    this.winBackground = false;
  }
}
