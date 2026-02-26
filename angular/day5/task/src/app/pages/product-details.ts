import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-details',
  imports: [RouterLink],
  template: `
    <div>
      <h4>Product Details</h4>
      <p>Viewing product at index: <strong>{{ id }}</strong></p>
      <button routerLink="../">Back to Products</button>
    </div>
  `,
  styles: [`
    div {
      padding: 20px;
      border: 1px solid #17a2b8;
      border-radius: 8px;
      background-color: #d1ecf1;
      margin-top: 10px;
    }
    h4 { margin-bottom: 10px; }
    p { margin-bottom: 15px; }
    button {
      padding: 5px 15px;
      background-color: #6c757d;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    button:hover { background-color: #5a6268; }
  `]
})

export class ProductDetails implements OnInit {
  id: string | null = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
  }
}
