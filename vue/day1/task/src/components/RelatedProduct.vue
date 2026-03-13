<template>
  <div class="related__card">
    <img :src="product.image" :alt="product.name" />
    <h3>{{ product.name }}</h3>
    <div class="related__prices">
      <span class="related__price">${{ discounted }}</span>
      <span v-if="product.discount > 0" class="related__original">${{ product.price }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RelatedProduct',
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  computed: {
    discounted() {
      return this.product.price - this.product.discount
    }
  }
}
</script>

<style scoped>
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
