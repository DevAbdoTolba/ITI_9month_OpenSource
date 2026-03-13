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
    <div class="my-ugly-navbar">
        <h2>{{props.logo_text}}</h2>
        <ul>
            <li v-for="link in props.links">
                <RouterLink :to="'/'+link">{{link.toUpperCase()}}</RouterLink>
            </li>
        </ul>
    </div>
</template>

<style scoped>
.my-ugly-navbar {
    background: #333;
    color: white;
    padding: 10px;
    margin-bottom: 20px;
}
.my-ugly-navbar ul {
    list-style: none;
    padding: 0;
}
.my-ugly-navbar li {
    display: inline;
    margin-right: 15px;
}
.my-ugly-navbar a {
    color: yellow;
    text-decoration: none;
}
</style>