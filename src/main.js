import { createApp } from 'vue' /* creates application */
import App from './App.vue' /* imports app.vue */
import router from './router/index.js'

createApp(App) /* creates new app */
    .use(router) /* downloads router */
    .mount('#app') /*into the index.html */

