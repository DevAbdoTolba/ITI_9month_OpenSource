<script setup>
import { onMounted } from 'vue';
import ComponentFigure from './ComponentFigure.vue';

const props = defineProps({
    main_product: Object
})

const emit = defineEmits(['buyProduct']);

function buy() {
    emit('buyProduct', props.main_product.id);
}

onMounted(() => {
    console.log("Main product loaded:", props.main_product)
})
</script>

<template>
    <div class="main-product-box">
        <ComponentFigure :images="props.main_product.images"/>
            
        <div class="info">
            <span v-if="props.main_product.badge" class="badge-new">{{props.main_product.badge}}</span>
            
            <div style="margin-top: 10px;">
                <span class="tag" v-for="tag in props.main_product.tags">
                    {{tag}}
                </span>
            </div>

            <h1>{{props.main_product.name}}</h1>
            <p>{{props.main_product.description}}</p>

            <div>
                <b>Stock : {{props.main_product.stock}}</b>
            </div>

            <h3 :class="props.main_product.discount > 0 ? 'strikethrough' : ''">Price: {{props.main_product.price}}$</h3>
            <h3 v-if="props.main_product.discount > 0" style="color: green;">
                Discounted: {{ props.main_product.price * (props.main_product.discount/100) }}$
            </h3>

            <button 
                class="buy-btn" 
                :disabled="props.main_product.stock <= 0"
                @click="buy"
            >
                Buy Now
            </button>
        </div>
    </div>
</template>

<style scoped>
.main-product-box {
    border: 2px dashed #666;
    padding: 20px;
    display: flex;
    gap: 20px;
    background: white;
}
.badge-new {
    background: red;
    color: white;
    padding: 5px;
    font-weight: bold;
}
.tag {
    background: #eee;
    padding: 2px 5px;
    border: 1px solid black;
    margin-right: 5px;
}
.strikethrough {
    text-decoration: line-through;
    color: gray;
}
.buy-btn {
    background: blue;
    color: white;
    font-size: 20px;
    padding: 10px;
    cursor: pointer;
}
.buy-btn:disabled {
    background: gray;
    cursor: not-allowed;
}
</style>