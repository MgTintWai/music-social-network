import { createWebHistory, createRouter } from "vue-router";
import HomeView from '../views/HomeView'
import RegisterView from '../views/RegisterView'
import LoginView from '../views/LoginView'
import AccountView from '../views/AccountView'
import EditProfile from '../views/account/EditProfile.vue'
import ProfileSection from '../views/account/ProfileSection.vue'

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/register",
    name: "register",
    component: RegisterView,
  },
  {
    path: "/account",
    component: AccountView,
    children: [
      {
        path: "profile",
        name: "ProfileSection",
        component: ProfileSection,
      },
      {
        path: "edit-profile",
        name: "EditProfile",
        component: EditProfile,
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;