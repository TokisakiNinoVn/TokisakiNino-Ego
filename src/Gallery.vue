<script setup>
import Header from './components/Header.vue'
</script>

<template>
    <main>
        <header>
            <Header />
        </header>
        <div role="list" class="main_gallery">
            <!-- <img  data-grid-item="true" role="listitem" v-for="img in images" :key="img.id" :src="img.src" alt=""> -->
            <img v-for="img in images" :key="img.id" :src="img.src" data-grid-item="true" role="listitem" :style="getImgStyle(index)" alt="">
        </div>

    </main>


</template>

<script>
import './assets/css/gallery.css'

export default {
    data() {
        return {
            images: [
                { id: 1, src: '/ElysiaAlbum/Gallery/ELysiaGallery(1).jpg' },
                { id: 2, src: '/ElysiaAlbum/Gallery/ELysiaGallery(2).jpg' },
                { id: 3, src: '/ElysiaAlbum/Gallery/ELysiaGallery(3).jpg' },
                { id: 4, src: '/ElysiaAlbum/Gallery/ELysiaGallery(4).jpg' },
                { id: 5, src: '/ElysiaAlbum/Gallery/ELysiaGallery(5).jpg' },
                { id: 6, src: '/ElysiaAlbum/Gallery/ELysiaGallery(6).jpg' },
                { id: 7, src: '/ElysiaAlbum/Gallery/ELysiaGallery(7).jpg' },
                { id: 8, src: '/ElysiaAlbum/Gallery/ELysiaGallery(8).jpg' },
                { id: 9, src: '/ElysiaAlbum/Gallery/ELysiaGallery(9).jpg' },
                { id: 10, src: '/ElysiaAlbum/Gallery/ELysiaGallery(10).jpg' },
                { id: 11, src: '/ElysiaAlbum/Gallery/ELysiaGallery(11).jpg' },
                { id: 12, src: '/ElysiaAlbum/Gallery/ELysiaGallery(12).jpg' },
                { id: 13, src: '/ElysiaAlbum/Gallery/ELysiaGallery(13).jpg' },
                { id: 14, src: '/ElysiaAlbum/Gallery/ELysiaGallery(14).jpg' },
                { id: 15, src: '/ElysiaAlbum/Gallery/ELysiaGallery(15).jpg' },
                { id: 16, src: '/ElysiaAlbum/Gallery/ELysiaGallery(16).jpg' },
                { id: 17, src: '/ElysiaAlbum/Gallery/ELysiaGallery(17).jpg' },
                { id: 18, src: '/ElysiaAlbum/Gallery/ELysiaGallery(18).jpg' },
                { id: 19, src: '/ElysiaAlbum/Gallery/ELysiaGallery(19).jpg' },
                { id: 20, src: '/ElysiaAlbum/Gallery/ELysiaGallery(20).jpg' },
                { id: 21, src: '/ElysiaAlbum/Gallery/ELysiaGallery(21).jpg' },
                { id: 22, src: '/ElysiaAlbum/Gallery/ELysiaGallery(22).jpg' },
                
            ],
            translateXValues: [], // Mảng lưu trữ giá trị translateX
            translateYValues: [] // Mảng lưu trữ giá trị translateY
        }
    },
    methods: {
        getImageDimensions() {
            const img = this.$refs.imageRef;
            // Lấy chiều rộng của ảnh
            const imageWidth = img.naturalWidth;
            // Lấy chiều cao của ảnh
            const imageHeight = img.naturalHeight;
            // console.log('Chiều rộng:', imageWidth);
            // console.log('Chiều cao:', imageHeight);
        },

        getImgStyle(index) {
            return {
                transform: `top: 0px; left: 0px; translateX(${this.translateXValues[index] || 0}px) translateY(${this.translateYValues[index] || 0}px)`
            };
        }
    },
    mounted() {
        // Lấy ra tất cả các ảnh
        const images = document.querySelectorAll('[data-grid-item="true"]');
        // console.log(images);
        // Lặp qua từng ảnh
        images.forEach((image, index) => {
            // console.log(image);
            // Lấy ra kích thước của ảnh
            const imageWidth = image.clientWidth;
            const imageHeight = image.clientHeight;
            // console.log('Chiều rộng:', imageWidth);
            // console.log('Chiều cao:', imageHeight);
            // Tính toán giá trị translateX
            const translateX = (imageWidth - 300) / 2;
            // Tính toán giá trị translateY
            const translateY = (imageHeight - 300) / 2;
            // console.log('translateX:', translateX);
            // console.log('translateY:', translateY);
            // Lưu trữ giá trị translateX vào mảng translateXValues
            this.translateXValues.push(translateX);
            // Lưu trữ giá trị translateY vào mảng translateYValues
            this.translateYValues.push(translateY);
        });
    }

}
</script>

