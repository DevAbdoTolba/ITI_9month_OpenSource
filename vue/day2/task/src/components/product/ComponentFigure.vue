<script setup>
const props = defineProps({
    images: []
})
</script>

<template>
    <div class="basic-image-container">
        <img :src="props.images[0]" style="width: 300px; border: 5px solid black;" />
        
        <div v-if="props.images.length > 1">
            <p>More images available but I deleted the carousel logic haha</p>
        </div>
    </div>
</template>