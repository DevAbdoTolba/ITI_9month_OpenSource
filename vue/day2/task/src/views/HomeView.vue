<script setup>
import MainProduct from '@/components/product/MainProduct.vue'
import RelatedProducts from '@/components/product/RelatedProducts.vue'

const props = defineProps({
    main_product: Object,
    products: []
})


    console.log("HEEHRHEEEEEE:", props.main_product);
    console.log("After HEEHRHEEEEEE:", props.products);

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

  <RelatedProducts :products="products"/>
</template>