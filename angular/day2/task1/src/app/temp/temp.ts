import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-temp',
  imports: [FormsModule],
  templateUrl: './temp.html',
  styleUrl: './temp.css',
})
export class Temp {
  temp: number = 0;
}
