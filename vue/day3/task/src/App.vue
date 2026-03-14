<script setup>
import NavbarComponent from '@/components/navbar/NavbarComponent.vue'
import { ref, reactive } from 'vue'

const website_logo = 'Vue'
const navLinks = ['home', 'about']


const main_product = reactive({
  "id": 1,
  "name": "Cozy Sneakers",
  "description": "High-quality sneakers that go with everything you wear.",
  "images": [
    "https://picsum.photos/seed/main/400/400"
  ],
  "badge": "NEW",
  "price": 120,
  "discount": 20,
  "tags": ["Fashion", "Casual", "Sport"],
  "stock": 3
})

const products = reactive([
  {
    "id": 1,
    "name": "Cozy Sneakers",
    "description": "High-quality sneakers that go with everything you wear.",
    "images": ["https://picsum.photos/seed/1/300/300"],
    "badge": "NEW",
    "price": 120,
    "discount": 20,
    "stock": 10,
    "tags": ["Fashion", "Casual", "Sport"]
  },
  {
    "id": 2,
    "name": "Running Shoes",
    "description": "Built for speed and comfort on any terrain.",
    "images": ["https://picsum.photos/seed/2/300/300"],
    "badge": "",
    "price": 90,
    "discount": 10,
    "stock": 0,
    "tags": ["Sport", "Running"]
  },
  {
    "id": 3,
    "name": "Casual Boots",
    "description": "Rugged boots for everyday adventures.",
    "images": ["https://picsum.photos/seed/3/300/300"],
    "badge": "SALE",
    "price": 150,
    "discount": 0,
    "stock": 8,
    "tags": ["Casual", "Winter"]
  },
  {
    "id": 4,
    "name": "Flip Flops",
    "description": "Light and breezy for sunny days.",
    "images": ["https://picsum.photos/seed/4/300/300"],
    "badge": "",
    "price": 30,
    "discount": 50,
    "stock": 20,
    "tags": ["Summer", "Casual"]
  }
])



function decreaseStock() {
  if (main_product.stock > 0) {
    console.log("running decreaseStock")
    main_product.stock--
  };
}

function buyFromProducts(id) {
  if (id) {
    products.forEach(product => {
      if (product.id == id && product.stock > 0) {
        product.stock--;
      }
    })
  }
  console.log("Parent recieved data from productView id = ", id)
}
</script>

<template>
  <NavbarComponent :logo_text="website_logo" :links="navLinks"/>
  
  <RouterView 
    :products="products" 
    :main_product="main_product" 
    @buy-emit="decreaseStock"
    @tell-parent-to-buy="buyFromProducts"
    />
</template>