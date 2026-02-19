import { Component, Input } from '@angular/core';



@Component({
  selector: 'snackbar',
  imports: [],
  template: `
  <div style="background-color: {{color}};">
    {{ message }}
  </div>
`,
  styles: [`
      div {
        padding: 10px;
        border-radius: 5px;
        width:40vw;
        margin: 10px auto;
      }
    `]
})
export class Snackbar {
  @Input() message: string = '';
  @Input({
      required: false,
    }) color: string | number = 'black';
}


@Component({
  selector: 'app-notifi',
  imports: [Snackbar],
  templateUrl: './notifi.html',
  styleUrl: './notifi.css',
})
export class Notifi {}




