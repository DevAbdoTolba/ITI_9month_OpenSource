<template>
  <div class="page">
    <section class="product">
      <div class="product__image">
        <img :src="product.image" :alt="product.name" />
        <span
          v-if="product.badge"
          class="badge"
          :class="{
            'badge--new': product.badge === 'NEW',
            'badge--sale': product.badge !== 'NEW'
          }"
        >
          {{ product.badge }}
        </span>
      </div>
      <div class="product__info">
        <h1 class="product__name">{{ product.name }}</h1>
        <p class="product__description">{{ product.description }}</p>

        <div class="prices">
          <div class="prices__current">${{ discountedPrice }}</div>
          <div v-if="product.discount > 0" class="prices__original">
            ${{ product.price }}
          </div>
        </div>

        <div class="tags">
          <span v-for="tag in product.tags" :key="tag" class="tag">
            {{ tag }}
          </span>
        </div>

        <button class="buy" :disabled="!product.isAvailable" :style="{ opacity: product.isAvailable ? 1 : 0.5 }">
          {{ product.isAvailable ? labels.buy : labels.out }}
        </button>
      </div>
    </section>

    <section class="related">
      <h2 class="related__title">{{ labels.relatedTitle }}</h2>
      <div class="related__list">
        <RelatedProduct :product="relatedProducts[0]" />
        <RelatedProduct :product="relatedProducts[1]" />
        <RelatedProduct :product="relatedProducts[2]" />
      </div>
    </section>
  </div>
  
</template>

<script>
import RelatedProduct from './components/RelatedProduct.vue'

export default {
  name: 'App',
  components: {
    RelatedProduct
  },
  data() {
    return {
      labels: {
        buy: 'Buy Now',
        out: 'Out of Stock',
        relatedTitle: 'Related Products'
      },
      product: {
        id: 1,
        name: 'Cozy Sneakers',
        description: 'High-quality sneakers that go with everything you wear.',
        image: 'https://picsum.photos/300/300',
        badge: 'NEW',
        price: 120,
        discount: 20,
        tags: ['Fashion', 'Casual', 'Sport'],
        isAvailable: true
      },
      relatedProducts: [
        {
          id: 2,
          name: 'Running Shoes',
          price: 90,
          discount: 10,
          image: 'https://picsum.photos/150/150'
        },
        {
          id: 3,
          name: 'Casual Boots',
          price: 150,
          discount: 0,
          image: 'https://picsum.photos/150/150'
        },
        {
          id: 4,
          name: 'Flip Flops',
          price: 30,
          discount: 50,
          image: 'https://picsum.photos/150/150'
        }
      ]
    }
  },
  computed: {
    discountedPrice() {
      return this.product.price - this.product.discount
    }
  }
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
}

body{
  background: #121212;
  color: white;
}

.page {
  max-width: 800px;
  margin: 1rem auto;
  padding: 0 1rem;
  font-family: system-ui, sans-serif;
}

.product {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
}

.product img {
  width: 200px;
  height: auto;
  display: block;
}

.badge {
  display: inline-block;
  padding: 0.2rem 0.5rem;
  border-radius: 999px;
  color: white;
  font-size: 0.75rem;
}

.badge--new {
  background: green;
}

.badge--sale {
  background: red;
}

.tags {
  margin: 0.5rem 0;
}

.tag {
  display: inline-block;
  margin-right: 0.4rem;
  padding: 0.2rem 0.4rem;
  background: #444;
  border-radius: 8px;
  font-size: 0.85rem;
}

.buy {
  padding: 0.6rem 1rem;
}

.related__list {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.related__card {
  border: 1px solid #ddd;
  padding: 0.75rem;
  width: 180px;
}

.related__card img {
  width: 100%;
  display: block;
  margin-bottom: 0.5rem;
}

.related__original {
  text-decoration: line-through;
  color: #666;
}
</style>
 