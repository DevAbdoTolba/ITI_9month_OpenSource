import { Component, Input } from '@angular/core';
import { NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';



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
  imports: [Snackbar, NgSwitch, NgSwitchCase, NgSwitchDefault],
  templateUrl: './notifi.html',
  styleUrl: './notifi.css',
})
export class Notifi {
notifications = [
    { message: 'This is a notification message', color: '#e0f2fe' },
    { message: 'This is NOT a notification message', color: '#fee2e2' },
    { message: 'Indeed a notification', color: '#d1fae5' },
    { message: 'Unknown notification', color: '#f3f4f6' }
  ];
}




