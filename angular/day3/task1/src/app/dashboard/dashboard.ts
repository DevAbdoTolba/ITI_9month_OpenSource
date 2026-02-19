import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-product',
  imports: [FormsModule],
  template: `
    <h3>{{productName}}</h3>
    <p>Price: {{productPrice}}</p>
    <p>Category: {{productCategory}}</p>
    <div>
      <button (click)="favProduct.emit(productName)">favorite</button>
      <button (click)="deleteProduct.emit()">delete</button>
      </div>
    `,
  styleUrl: `./product.css`
})

export class Product {

  @Output() favProduct = new EventEmitter<string>();
  @Output() deleteProduct = new EventEmitter<void>();

  @Input() fav : string = "None Yet";
  @Input() productName : string = "";
  @Input() productPrice : number = 0;
  @Input() productCategory : string = "";

}


@Component({
  selector: 'app-dashboard',
  imports: [FormsModule, Product],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})

export class Dashboard {
  products : {
  productName : string;
  productPrice : number;
  productCategory : string;
  }[] = [];

  fav : string = "None Yet";
  productName : string = "";
  productPrice : number = 0;
  productCategory : string = "";



  addProduct() {
      this.products.push({
      productName: this.productName || "None",
      productPrice: this.productPrice || 100,
      productCategory: this.productCategory || "N/A",
    });

    this.productName = "";
    this.productPrice = 0;
    this.productCategory = "";

  }

  addToFav(productName : string) {
    this.fav = productName;
  }

  deleteProduct(index : number) {
    this.products.splice(index, 1);
  }

}
