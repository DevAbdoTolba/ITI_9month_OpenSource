import { Component, signal } from '@angular/core';
import { Carousel } from './carousel/carousel';
import { Name } from './name/name';
import { Temp } from './temp/temp';

@Component({
  selector: 'app-root',
  imports: [ Carousel, Name, Temp],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
}
