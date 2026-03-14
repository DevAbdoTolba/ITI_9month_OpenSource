<script setup>
import ProductCard from '@/components/product/ProductCard.vue';

const props = defineProps({
    products: []
})
</script>

<template>
<div style="margin-top: 50px; border-top: 5px solid #212121; padding-top: 20px;">
    <h2 style="color : #FFFFFF;">Related Products : </h2>

    <div style="display: flex; gap: 15px; flex-wrap: wrap; margin-top: 20px;">
        <ProductCard v-for="product in products" :product="product"/>
    </div>
</div>
</template>