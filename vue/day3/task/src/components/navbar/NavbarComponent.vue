<script setup>
import { onMounted } from 'vue';

const props = defineProps({
    logo_text: String,
    links: Array
})

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
    </div>
</template>

<style scoped>
.app-navbar {
    background: #333;
    color: #FFFFFF;
    padding: 10px;
    margin-bottom: 20px;
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
</style>