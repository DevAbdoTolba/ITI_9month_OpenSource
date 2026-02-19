import { Component, signal } from '@angular/core';
import { Dashboard } from './dashboard/dashboard';
import { Notifi } from './task2/notifi/notifi';

@Component({
  selector: 'app-root',
  imports: [ Dashboard, Notifi],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('task1');
}
