<script setup>
  import Header from './components/Header.vue'
  import Footer from './components/Footer.vue'
</script>


<template>
  <header>
    <Header />
  </header>
  
  <main>
    <div class="main_content">
      <div class="banner">
        <img class="logoHI3" src="/img/logogame.png" alt="Logo HI3">
        <div class="infor_basic">
          <span class="fullname">Elysia</span>
          <span class="descript">"Just as predicted in the book, “Paradise does not exist”. If heaven doesn't exist then I will create it myself."</span>
          <span class="herrcher"><ion-icon name="sparkles-outline"></ion-icon> Herrscher of Human: Ego <ion-icon name="sparkles-outline"></ion-icon></span>
        </div>
        <img class="elysia_main" src="/ElysiaAlbum/ElysiaMaid.png" alt="">
      </div>
      <div class="bottom_container">
        <div class="art_box">
          <span>Arts <ion-icon name="chevron-forward-outline"></ion-icon> </span>
          <div class="art_container">
            <img src="/ElysiaAlbum/Elysia(3).jpg" alt="">
            <img src="/ElysiaAlbum/Elysia(3).jpg" alt="">
          </div>
          <button>View More</button>
        </div>
        <div class="search_box">
          <span>Search keywords</span>
          <div class="input_search">
            <ion-icon name="search-outline"></ion-icon>
            <input type="text" placeholder="Herrscher of Human: Ego">
          </div>
          <div class="input_search">
            <ion-icon name="search-outline"></ion-icon>
            <input type="text" placeholder="Herrscher of Human: Ego">
          </div>
          <div class="input_search">
            <ion-icon name="search-outline"></ion-icon>
            <input type="text" placeholder="Herrscher of Human: Ego">
          </div>
          <div class="input_search">
            <ion-icon name="search-outline"></ion-icon>
            <input type="text" placeholder="Herrscher of Human: Ego">
          </div>
        </div>
        <div class="artboxt_wiu">
          <img src="/ElysiaAlbum/ElyIcon(2).png" alt="">
          <img src="/ElysiaAlbum/ElyIcon(2).png" alt="">
          <img src="/ElysiaAlbum/ElyIcon(2).png" alt="">
          <img src="/ElysiaAlbum/ElyIcon(2).png" alt="">
        </div>
      </div>
    </div>
  </main>
  
  <footer>
    <Footer />
  </footer>
</template>

<script>
import './assets/css/main.css'
</script>
