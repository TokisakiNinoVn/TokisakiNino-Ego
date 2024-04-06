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
        <img class="logoHI3" src="../public/img/logogame.png" alt="Logo HI3">
        <div class="infor_basic">
          <span class="fullname">Elysia</span>
          <span class="descript">"Just as predicted in the book, “Paradise does not exist”. If heaven doesn't exist then I will create it myself."</span>
          <span class="herrcher"><ion-icon name="sparkles-outline"></ion-icon> Herrscher of Human: Ego <ion-icon name="sparkles-outline"></ion-icon></span>
        </div>
        <img class="elysia_main" src="../public/ElysiaAlbum/ElysiaMaid.png" alt="">
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
