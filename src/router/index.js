import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import AmbulancesList from "../views/ambulances/AmbulancesList.vue";
import FireTrucksList from "../views/firetrucks/FireTrucksList.vue";
import PoliceCarsList from "../views/policecars/PoliceCarsList.vue";
import Login from "@/views/auth/Login.vue";
import Signup from "@/views/auth/Signup.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: '/ambulances',
    name: 'AmbulancesList',
    component: AmbulancesList
  },
  {
    path: '/fire_trucks',
    name: 'FireTrucksList',
    component: FireTrucksList
  },
  {
    path: '/police_cars',
    name: 'PoliceCarsList',
    component: PoliceCarsList
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
