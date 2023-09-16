import { createRouter, createWebHistory } from 'vue-router';


import myProducts from './views/myProducts.vue';
import mainTask from './views/mainTasks.vue';

const routes = [
    
    { path: '/products', name: 'products', component: myProducts },
    { path: '/mainTask', name: 'mainTask', component: mainTask }
    
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
