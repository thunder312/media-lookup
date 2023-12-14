import { createApp } from 'vue';
import App from './App.vue';
import { createRouter,createWebHistory} from 'vue-router';
import Home from './components/MediaLookup.vue';
import Receipts from './components/Receipts.vue';
import Books from './components/Books.vue';
import Films from './components/Films.vue';
import "bootstrap/dist/css/bootstrap.min.css";
import mitt from 'mitt'; // event dispatcher (emitter)

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: [
      { path: '/', component: Home },
      { path: '/receipts', component: Receipts },
      { path: '/books', component: Books },
      { path: '/films', component: Films }
    ]
  });

const emitter = mitt();
const app = createApp(App);

app.config.globalProperties.emitter = emitter;
app.use(router)
.use(GoogleAPIs, {
  clientId: '1093010721849-m6ll2h1glpuj9jqkdo3cj57te08o90uk.apps.googleusercontent.com',
  discoveryDocs: ['https://www.googleapis.com/books/v1/volumes'],
  scope: 'https://www.googleapis.com/auth/books.readonly',
})
.mount('#app');