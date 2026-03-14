<script setup>
import { onMounted, watch, ref } from 'vue';
import { useRoute } from 'vue-router';

import MainProduct from '@/components/product/MainProduct.vue';
import RelatedProducts from '@/components/product/RelatedProducts.vue';

    const props = defineProps({
        products: []
    })

    const emits = defineEmits(['tell-parent-to-buy'])

    const router = useRoute();
    const mainProduct = ref()
    const relatedProducts = ref([])

    onMounted(() => {
        console.log("HI from ProductView");
    })

    function buy_from_products(id) {
        emits('tell-parent-to-buy', id);
    }

    watch(
        () => router.params,
        (newId) => {
            mainProduct.value = props.products.find(product => product.id == router.params.id);
            relatedProducts.value = props.products.filter(product => product.id != router.params.id)
        },
        {immediate: true}
    )
</script>

<template>
    <MainProduct 
        :main_product="mainProduct" 
        @buy-product="buy_from_products"
    />

    <RelatedProducts :products="relatedProducts"/>
</template>