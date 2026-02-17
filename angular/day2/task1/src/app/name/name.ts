import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-name',
  imports: [FormsModule],
  templateUrl: './name.html',
  styleUrl: './name.css',
})
export class Name {
  nameText: string = "";
  reset() {
    this.nameText = ""
  }
}
