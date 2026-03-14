<script setup>
import { onMounted } from 'vue';

const props = defineProps({
    logo_text: String,
    links: Array,
    cartCount: {
        type: Number,
        default: 0
    }
})

const emit = defineEmits(['cartClick'])

onMounted( () => {
    console.log(props.links);
});
</script>

<template>
    <div class="app-navbar">
        <h2>{{props.logo_text}}</h2>
        <ul>
            <li v-for="link in props.links">
                <RouterLink :to="'/'+link">{{link.toUpperCase()}}</RouterLink>
            </li>
        </ul>

        <button class="cart-btn" @click="emit('cartClick')">
            Cart ({{ props.cartCount }})
        </button>
    </div>
</template>

<style scoped>
.app-navbar {
    background: #333;
    color: #FFFFFF;
    padding: 10px;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.app-navbar ul {
    list-style: none;
    padding: 0;
}
.app-navbar li {
    display: inline;
    margin-right: 15px;
}
.app-navbar a {
    color: #FFC107;
    text-decoration: none;
}

.cart-btn {
    background: #FFC107;
    color: #212121;
    border: none;
    padding: 6px 12px;
    cursor: pointer;
    font-weight: bold;
    border-radius: 4px;
    
}
</style>