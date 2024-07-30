import { createRouter, createWebHistory } from 'vue-router';
import Home from '../Home.vue';
import About from '../About.vue';
import Gallery from '../Gallery.vue';

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
