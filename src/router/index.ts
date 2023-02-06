import { createRouter, createWebHistory } from "vue-router";
import UsersView from "@/views/UsersView.vue";
import ProfileView from "@/views/ProfileView.vue";
import CreateUserView from "@/views/CreateUserView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "users",
      component: UsersView,
    },
    {
      path: "/profile/:id",
      name: "profile",
      component: ProfileView,
    },
    {
      path: "/create-user",
      name: "create-user",
      component: CreateUserView,
    },
    {
      path: "/:pathMatch(.*)*",
      redirect: "/",
    },
  ],
});

export default router;
