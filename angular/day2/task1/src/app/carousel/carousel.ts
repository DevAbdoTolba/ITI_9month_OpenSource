import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  imports: [],
  templateUrl: './carousel.html',
  styleUrl: './carousel.css',
})
export class Carousel {
  seed: number = 1;
  slideFlag: boolean = false;
  intervalFlag: boolean = false;

  runner() {
    if (this.intervalFlag) return
    this.intervalFlag = true;
    setInterval(() => {
          if (this.slideFlag) {
            this.next();
          }
        }, 1000);
  }

  next() {
    this.seed = (this.seed+1) % 5;
  }

  prev() {
    this.seed = (this.seed - 1 + 5) % 5;
  }

  slide() {
    this.slideFlag = true;
    console.log(this.slideFlag)

  }

  stop() {
    this.slideFlag = false;
  }


}
