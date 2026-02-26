import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  template: `
    <div>
      <h1>Home Page</h1>
      <p>Welcome to our Product Management System.</p>
      <button routerLink="/about/products">Manage Products</button>
    </div>
  `,
  styles: [`
    div {
      text-align: center;
      padding: 40px;
    }
    h1 { margin-bottom: 10px; }
    p { color: #555; margin-bottom: 20px; }
    button {
      padding: 10px 20px;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    button:hover { background-color: #0056b3; }
  `]
})

export class Home {
}
