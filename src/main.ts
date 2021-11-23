import App from './App.vue';
import routes from 'pages-generated'; // vite-plugin-pages 生成的路由信息
import { ViteSSG } from 'vite-ssg';

// const app = createApp(App);
// app.use(
//   createRouter({
//     history: createWebHistory(),
//     routes,
//   })
// );
// app.mount('#app');

export const createApp = ViteSSG(App, { routes });
