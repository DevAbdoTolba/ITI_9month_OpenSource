<script setup>
import { RouterLink } from 'vue-router';

const props = defineProps({
    product: Object
})

    console.log(props.product);

</script>

<template>
    <div class="simple-card">
        <img :src="props.product.images[0]" alt="Shoes" style="width: 100%; height: 150px; object-fit: cover;" />
        
        <div style="padding: 10px;">
            <h3>{{props.product.name}}</h3>
            
            <div>
                <span :class="props.product.discount > 0 ? 'strikethrough' : ''">{{props.product.price}} $</span>
                <span v-if="props.product.discount > 0" style="margin-left: 10px; color: green; font-weight: bold;">
                    {{props.product.price * (props.product.discount/100)}} $
                </span>
                
                <div v-if="props.product.stock <= 0" style="color: red; margin-top: 5px;">Out of stock!!</div>
            </div>
            
            <br>
            
            <RouterLink 
                v-if="props.product.stock > 0"
                :to="{ name: 'products', params: { id: props.product.id } }" 
            >
                <button class="ugly-btn">Buy</button>
            </RouterLink>

            <RouterLink 
                v-else
                :to="{ name: 'products', params: { id: props.product.id } }" 
            >
                <button>View Product</button>
            </RouterLink>
        </div>
    </div>
</template>

<style scoped>
.simple-card {
    border: 1px solid black;
    width: 200px;
    background: #fafafa;
}
.strikethrough {
    text-decoration: line-through;
    color: gray;
}
.ugly-btn {
    background: green;
    color: white;
    padding: 5px 10px;
}
</style>