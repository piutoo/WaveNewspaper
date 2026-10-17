import { createRouter, createWebHistory } from 'vue-router';
/* creates router for your app */



/*loads a vue comp so the router can display it*/
import HomePage from '@/pages/homePage.vue';
import LoginPage from '@/pages/login.vue';
import ArticleDetailPage from '@/pages/article-detail.vue';
import WorldPage from '@/pages/WorldPage.vue';
import ClimatePage from '@/pages/climatePage.vue';
import PoliticsPage from '@/pages/politicsPage.vue';
import ArticleReading from '@/pages/articleReading.vue';
import SearchPage from '@/pages/search.vue';

/*defines comps, will open the url if the user click its */
const routes = [
    { path: '/', redirect: '/home' },
    { path: '/home', component: HomePage },
    { path: '/world', component: WorldPage },
    { path: '/climate', component: ClimatePage },
    { path: '/politics', component: PoliticsPage },
    { path: '/article', redirect: '/home' },
    { path: '/create', component: ArticleDetailPage },
    { path: '/search', component: SearchPage },
    { path: '/article/:slug', component: ArticleReading },
    { path: '/article-reading', name: 'ArticleReading', component: ArticleReading },
/* extra property, name */
    { path: '/login', component: LoginPage }
];

const router = createRouter({ /* builds router */
    history: createWebHistory(),
    routes /* attaches all the routes above, route instances */
});

export default router; /*makes router avail to full app */









