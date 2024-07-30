<script setup>
import Header from './components/Header.vue'
</script>

<template>
    <main>
        <header class="header">
            <Header />
        </header>
        <div role="list" class="main_gallery">
            <img v-for="img in images" :key="img.id" :src="img.src" data-grid-item="true" role="listitem"  alt="ELysia">
        </div>
    </main>
</template>

<script>
import './assets/css/gallery.css'

export default {
    data() {
        return {
            images: []
        }
    },
    async created() {
    try {
        const response = await fetch('/ElysiaAlbum/images.json');
        const data = await response.json();

        const shuffleArray = array => {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
            return array;
        };

        this.images = shuffleArray(data.map(item => ({
            id: item.id,
            src: `/ElysiaAlbum/Gallery/${item.file_name}`
        })));
    } catch (error) {
        console.error('Error fetching images:', error);
    }
}

}

</script>