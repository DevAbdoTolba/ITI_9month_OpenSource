import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-product',
  imports: [],
  template: `
    <h3>{{productName}}</h3>
    <p>Price: {{"$" + productPrice}}</p>
    <div>
      <button (click)="favProduct.emit(productName)">favorite</button>
      <button (click)="editProduct.emit()">edit</button>
      <button (click)="deleteProduct.emit()">delete</button>
    </div>
  `,
  styleUrl: './product.css'
})

export class Product {

  @Output() favProduct = new EventEmitter<string>();
  @Output() deleteProduct = new EventEmitter<void>();
  @Output() editProduct = new EventEmitter<void>();

  @Input() productName : string = "";
  @Input() productPrice : number = 0;

}


@Component({
  selector: 'app-dashboard',
  imports: [ReactiveFormsModule, Product],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})

export class Dashboard {
  products : {
    name : string;
    price : number;
  }[] = [];

  fav : string = "None Yet";

  productForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    price: new FormControl('', [Validators.required, Validators.min(4)]),
  });

  addProduct() {
    if (this.productForm.valid) {
      this.products.push({
        name: this.productForm.value.name || "None",
        price: Number(this.productForm.value.price) || 0,
      });
      this.productForm.reset();
    }
  }

  addToFav(productName : string) {
    this.fav = productName;
  }

  editProduct(index : number) {
    const newName = prompt('Enter new product name:', this.products[index].name);
    if (newName) {
      this.products[index].name = newName;
    }
  }

  deleteProduct(index : number) {
    this.products.splice(index, 1);
  }

}
