<script setup>
import Header from './components/Header.vue'
</script>

<template>
    <main>
        <header class="header">
            <Header />
        </header>
        <div role="list" class="main_gallery">
            <img v-for="img in images" :key="img.id" :src="img.src" data-grid-item="true" role="listitem"  alt="ELysiaGallery">
        </div>
    </main>
</template>

<script>
import './assets/css/gallery.css'

export default {
    data() {
        return {
            images: Array.from({length: 22}, (_, i) => ({ id: i + 1, src: `/ElysiaAlbum/Gallery/ELysiaGallery(${i + 1}).jpg` })),
        }
    }
}
</script>