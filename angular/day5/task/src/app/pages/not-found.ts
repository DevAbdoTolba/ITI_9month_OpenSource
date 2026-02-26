import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  imports: [RouterLink],
  template: `
    <div>
      <h1>404</h1>
      <h2>Oops! Page Not Found</h2>
      <a routerLink="/home">Return to Home</a>
    </div>
  `,
  styles: [`
    div {
      text-align: center;
      padding: 60px;
    }
    h1 {
      font-size: 5rem;
      color: red;
      margin-bottom: 10px;
    }
    h2 { margin-bottom: 20px; }
    a {
      padding: 10px 20px;
      color: #007bff;
      text-decoration: none;
      border: 1px solid #007bff;
      border-radius: 4px;
    }
    a:hover {
      background-color: #007bff;
      color: white;
    }
  `]
})

export class NotFound {
}
