import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <div>
      <h2>About Section</h2>
      <nav>
        <a routerLink="products" routerLinkActive="active">View Products List</a>
      </nav>
      <router-outlet />
    </div>
  `,
  styles: [`
    div { padding: 20px; }
    h2 {
      margin-bottom: 10px;
      padding-bottom: 10px;
      border-bottom: 1px solid #ccc;
      color: #555;
    }
    nav {
      margin-bottom: 20px;
    }
    nav a {
      padding: 5px 15px;
      text-decoration: none;
      color: #007bff;
      border: 1px solid #007bff;
      border-radius: 4px;
    }
    nav a.active {
      background-color: #007bff;
      color: white;
    }
  `]
})

export class About {
}
