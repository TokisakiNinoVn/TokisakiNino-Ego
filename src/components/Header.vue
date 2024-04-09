<template>
    <div class="main_header">
        <div class="navbar">
            <img src="/img/Elysia1.png" alt="logo" />
            <nav>
                <ul class="nav">
                    <li><a href="/">Home</a></li>
                    <li><a href="../../gallery.html">Gallery</a></li>
                    <li><a href="https://nino.is-a.dev/MyOfficialWebsite/index_about.html">Profile</a></li>
                    <li><a href="../../about.html">About</a></li>
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
        name: 'Header'
    }
</script>

<style>
</style>