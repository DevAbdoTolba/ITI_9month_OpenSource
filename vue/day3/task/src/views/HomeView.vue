<script setup>
import MainProduct from '@/components/product/MainProduct.vue'
import RelatedProducts from '@/components/product/RelatedProducts.vue'
import { computed } from 'vue';

const props = defineProps({
    main_product: Object,
    products: [Object]
})

const filtredRelatedProducts = computed(
  ( )=>{
      console.log("HEEHRHEEEEEE:", props.main_product);
      console.log("After HEEHRHEEEEEE:", props.products);
      const filtered = props.products.filter(p => p.id != props.main_product.id);
      console.log("After HEEHRHEEEEEE 222:", filtered);
      return filtered;
  }
)

const emit = defineEmits(['buy-emit'])

function buyMainProduct() {
    emit('buy-emit');
}
</script>

<template>
  <MainProduct 
    :main_product="main_product"
    @buy-product="buyMainProduct"
  />

  <RelatedProducts :products="filtredRelatedProducts"/>
</template>