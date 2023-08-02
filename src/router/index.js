import { createWebHistory, createRouter } from "vue-router";
import HomeView from '../views/HomeView'
import RegisterView from '../views/RegisterView'
import LoginView from '../views/LoginView'
import AccountView from '../views/AccountView'
import EditProfile from '../views/account/EditProfile.vue'
import ProfileSection from '../views/account/ProfileSection.vue'
import AddSong from '../views/account/AddSong.vue'
import DeleteSong from '../views/account/DeleteSong.vue'
import AddYoutubeVideo from '../views/account/AddYoutubeVideo.vue'
import DeleteYoutubeVideo from '../views/account/DeleteYoutubeVideo.vue'
import CreatePost from '../views/account/CreatePost.vue'
import EditPost from '../views/account/EditPost.vue'
import PostsSection from '../views/account/PostsSection.vue'
import PostByID from '../views/account/PostByID.vue'


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
      },
      {
        path: "add-song",
        name: "AddSong",
        component: AddSong,
      },
      {
        path: "delete-song",
        name: "DeleteSong",
        component: DeleteSong,
      },
      {
        path: "add-youtube-video",
        name: "AddYoutubeVideo",
        component: AddYoutubeVideo,
      },
      {
        path: "delete-youtube-video",
        name: "DeleteYoutubeVideo",
        component: DeleteYoutubeVideo,
      },
      {
        path: "create-post",
        name: "CreatePost",
        component: CreatePost,
      },
      {
        path: "edit-post",
        name: "EditPost",
        component: EditPost,
      },
      {
        path: "posts",
        name: "PostsSection",
        component: PostsSection,
      },
      {
        path: "post-by-id",
        name: "PostById",
        component: PostByID,
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;