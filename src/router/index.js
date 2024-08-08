import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

import { uauth } from "@/utils/auth";
import { useResponseStore } from "@/stores/response";
import { useAuthStore } from "@/stores/auth";

var HomeRoute;
var isAuthenticated;

if (!localStorage.getItem('auth_token')) isAuthenticated = false;
else isAuthenticated = true;

if (isAuthenticated) {
  HomeRoute = {
    path: '/',
    name: 'home',
    component: Home,
    alias: '/home'
  };
} else {
  HomeRoute = {
    path: '/',
    name: 'home',
    component: function () {
      return import("@/views/Landing.vue");
    },
    meta: { requiresGuest: true, bg: "dark" }
  };
}

const routes = [

  HomeRoute,

  {
    path: '/new',
    name: 'new',
    component: function () {
      return import("@/views/New.vue");
    }
  },

  {
    path: '/account',
    name: 'account',
    component: function () {
      return import("@/views/Account.vue");
    },
    meta: { requiresAuth: true }
  },

  {
    path: "/upgrade",
    name: 'upgrade',
    component: function () {
      return import("@/views/Upgrade.vue");
    },
    meta: { requiresAuth: true }
  },

  {
    path: '/login',
    name: 'login',
    component: function () {
      return import("@/views/Login.vue");
    },
    meta: { requiresGuest: true, bg: "img" }
  },
  {
    path: '/register',
    name: 'register',
    component: function () {
      return import("@/views/Register.vue");
    },
    meta: { requiresGuest: true, bg: "img" }
  },

  {
    path: "/verify-email",
    name: "verify-email",
    component: function () {
      return import("@/views/VerifyEmail.vue");
    },
  },

  {
    path: "/forgot-password",
    name: "forgot-password",
    component: function () {
      return import("@/views/ForgotPassword.vue");
    },
    meta: { bg: "img"}
  }, 
  {
    path: "/change-password",
    name: "change-password",
    component: function () {
      return import("@/views/ChangePassword.vue");
    },
    meta: { bg: "img"}
  },
  {
    path: "/change-email",
    name: "change-email",
    component: function () {
      return import("@/views/ChangeEmail.vue");
    },
  },

  {
    path: "/terms",
    name: "terms",
    component: function () {
      return import("@/views/Terms.vue");
    },
  },
  {
    path: "/privacy",
    name: "privacy",
    component: function () {
      return import("@/views/Privacy.vue");
    },
  },

  {
    path: '/maintenance',
    name: 'maintenance',
    component: function () {
      return import("@/views/Maintenance.vue");
    },
  },
  {
    path: '/:pathMatch(.*)*', // This will catch all undefined routes
    name: '404',
    component: function () {
      return import("@/views/404.vue");
    },
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

// Add the router guard
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresGuest) && isAuthenticated) {
    // If the route requires guest and the user is authenticated, redirect to home

    // useResponseStore().updateResponse("You're already logged in", "warn", false);
    next({ name: 'home' });
  } else if (to.matched.some(record => record.meta.requiresAuth) && !isAuthenticated) {
    // If the route requires auth and the user is not authenticated, redirect to login

    // useResponseStore().updateResponse("You need to be logged in", "warn", false);
    next({ name: 'login' });
  } else {
    // Otherwise, proceed as normal
    next();
  }
});

// Add the afterEach hook
router.afterEach((to, from) => {
  const msg = to.query.msg;
  const type = to.query.type;

  // Update background
  let bg = to.meta.bg;
  const bgel = document.getElementById("app");

  switch (bg) {
    case "dark":
      bgel.style.background = "var(--grey_1)";
      break;
    case "img":
      bgel.style.backgroundImage = "url('/bg.webp')";
      bgel.style.backgroundRepeat = "no-repeat";
      bgel.style.backgroundSize = "cover";
      break;
    default:
      bgel.style.background = "white";
      break;
  }

  if (msg && type) {
    const responseStore = useResponseStore();
    responseStore.updateResponse(msg, type, false);

    // Clear the query parameters
    router.replace({ path: to.path, query: {} });
  }
});

export default router
