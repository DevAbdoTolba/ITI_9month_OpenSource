import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  template: `
    <div>
      <h3>Login Page</h3>
      <button (click)="onLogin()">Login to Access Products</button>
    </div>
  `,
  styles: [`
    div {
      max-width: 400px;
      margin: 40px auto;
      padding: 30px;
      text-align: center;
      border: 1px solid #ccc;
      border-radius: 8px;
    }
    h3 { margin-bottom: 20px; }
    button {
      padding: 10px 20px;
      background-color: #28a745;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      width: 100%;
    }
    button:hover { background-color: #218838; }
  `]
})

export class Login {
  constructor(private router: Router) {}

  onLogin() {
    localStorage.setItem('isLoggedIn', 'true');
    this.router.navigate(['/about/products']);
  }
}
