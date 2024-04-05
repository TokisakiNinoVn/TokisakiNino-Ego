<template>
    <div class="main_footer">
        <div class="footer_logo">
            <img src="/img/Elysia1.png" alt="logo" />
        </div>
        <nav>
            <ul>
                <li><a href="/"><ion-icon name="home-outline"></ion-icon></a></li>
                <li><a href="/products"><ion-icon name="person-outline"></ion-icon></a></li>
                <li><a href="/services"><ion-icon name="albums-outline"></ion-icon></a></li>
                <li><a href="../../about.html"><ion-icon name="information-circle-outline"></ion-icon></a></li>
            </ul>
        </nav>
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
        name: 'Footer'
    }
</script>