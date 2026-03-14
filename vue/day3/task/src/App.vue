<script setup>
import NavbarComponent from '@/components/navbar/NavbarComponent.vue'
import { computed } from 'vue'
import { useFetch, useLocalStorage } from '@vueuse/core'

const website_logo = 'Vue'
const navLinks = ['home', 'about']
const url = "http://localhost:3000/products"

const cart = useLocalStorage('cart', [])
const cartCount = computed(() => cart.value.length)

const { isFetching, error, data: products } = useFetch(url).get().json()

const main_product = computed(() => products.value ? products.value[0] : null)

async function buyFromProducts(id) {
  if (!id || !products.value) return

  const product = products.value.find(p => p.id == id)
  if (!product || product.stock <= 0) return

  product.stock--

  cart.value = [...cart.value, { id: product.id, name: product.name }]

 await useFetch(`${url}/${id}`).put(product)


}
</script>

<template>
  <NavbarComponent
    :logo_text="website_logo"
    :links="navLinks"
    :cart-count="cartCount"
    @cart-click="() => console.log('cart', cart.value)"
  />
  
  <div v-if="isFetching" style="padding: 2rem; text-align: center;">
    Loading products...
  </div>

  <div v-else-if="error" style="padding: 2rem; color: red;">
    Failed to load products: {{ error }}
  </div>

  <RouterView 
    v-else-if="products && main_product"
    :products="products" 
    :main_product="main_product" 
    @tell-parent-to-buy="buyFromProducts"
  />
</template>