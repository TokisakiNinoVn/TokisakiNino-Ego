<template>
    <div class="main_header">
      <div class="navbar">
        <img src="/img/Elysia1.png" alt="logo" />
        <nav>
          <ul class="nav">
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/gallery">Gallery</router-link></li>
            <li><a href="https://nino.is-a.dev">Profile</a></li>
            <li><router-link to="/about">About</router-link></li>
            <li><a href="https://www.pinterest.com/ninomemories/elysia/">Pinterest</a></li>
          </ul>
        </nav>
      </div>
  
      <div class="tool_navbar">
        <ion-icon name="settings-outline"></ion-icon>
        <ul class="hidden">
          <li><ion-icon name="settings-outline"></ion-icon>Setting</li>
          <li><ion-icon name="moon-outline"></ion-icon>Darklight</li>
          <li><ion-icon name="language-outline"></ion-icon>Language</li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>

  import '../assets/css/header.css';
  
  export default {
    name: 'Header',
  }
  </script>
  
  <style scoped>
  /* CSS của bạn */
  </style>
  