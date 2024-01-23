import DashboardPage from '../pages/Dashboard.vue';
import Error404 from '../pages/errors/Error404.vue';
// the routes are simply an array of objects
const routes = [
    {
        path: '/',
        redirect: '/dashboard'
    },

];
export default routes;
