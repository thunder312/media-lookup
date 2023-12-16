import { createApp } from 'vue';
import App from './App.vue';
import { createRouter,createWebHistory} from 'vue-router';
import Home from './components/MediaLookup.vue';
import Receipts from './components/Receipts.vue';
import Books from './components/Books.vue';
import Films from './components/Films.vue';
import "bootstrap/dist/css/bootstrap.min.css";
import mitt from 'mitt'; // event dispatcher (emitter)
import vue3GoogleLogin from 'vue3-google-login'

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

const config = {
  api_key: process.env.VUE_APP_GOOGLE_API_KEY,
  clientId: process.env.VUE_APP_GOOGLE_CLIENT_ID,
  discoveryDocs: process.env.VUE_APP_GOOGLE_DISCOVERY_DOCS,
  scope: process.env.VUE_APP_GOOGLE_SCOPE
}

app.use(vue3GoogleLogin, config);
app.use(router);
app.mount('#app');