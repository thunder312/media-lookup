import { createApp } from 'vue';
import App from './App.vue';
import { createRouter,createWebHistory} from 'vue-router';
import Home from './components/MediaLookup.vue';
import Receipts from './components/Receipts.vue';
import Books from './components/Books.vue';
import Movies from './components/Movies.vue';

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: [
      { path: '/', component: Home },
      { path: '/receipts', component: Receipts },
      { path: '/books', component: Books },
      { path: '/movies', component: Movies }
    ]
  });

createApp(App)
.use(router)
.mount('#app')