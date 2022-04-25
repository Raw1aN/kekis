import Users from "../components/AdminPanel/userManager/users";
import Movies from "../components/AdminPanel/moviesManager/movies";
import Serials from "../components/AdminPanel/serialsManager/serials";
import Roles from "../components/AdminPanel/rolesManager/roles";
import Genres from "../components/AdminPanel/genresManager/genres";
import Subscriptions from "../components/AdminPanel/subscriptionsManager/subscriptions";
import Login from "../components/autorization/login";
import Registration from "../components/autorization/registration";
import AdminPanel from "../components/AdminPanel/AdminPanel";

export const privateRoutes = [
    { path: '/adminPanel', component: AdminPanel, exact: true },
    { path: '/AdminPanel/users', component: Users, exact: true },
    { path: '/AdminPanel/movies', component: Movies, exact: true },
    { path: '/AdminPanel/serials', component: Serials, exact: true },
    { path: '/AdminPanel/roles', component: Roles, exact: true },
    { path: '/AdminPanel/genres', component: Genres, exact: true },
    { path: '/AdminPanel/subscriptions', component: Subscriptions, exact: true },
];

export const publicRoutes = [
    { path: '/signin', component: Login, exact: true },
    { path: '/signup', component: Registration, exact: true },
];

