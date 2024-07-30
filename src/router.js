import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue';
import About from './components/About.vue';
import Gallery from './components/Gallery.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/gallery', component: Gallery }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
