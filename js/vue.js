const Home = {
  template: "#home",
  name: "Home",
  data: () => {
    return {
      api: jsonApi,
    };
  },
};
const Resultats = {
  template: "<h1>Resultats</<h1>",
  name: "Resultats",
  data: () => {
    return {
      api: jsonApi,
    };
  },
};
const Description = {
  template: "<h1>Description</<h1>",
  name: "Description",
  data: () => {
    return {
      api: jsonApi,
    };
  },
};

const router = new VueRouter({
  routes: [
    { path: "/", component: Home, name: "Home" },
    { path: "/Resultats", component: Resultats, name: "Resultats" },
    { path: "/Description", component: Description, name: "Description" },
  ],
  scrollBehavior(to, from, savedPosition) {
    return {
      x: 0,
      y: 0,
      behavior: "smooth",
    };
  },
});

const vue = new Vue({
  router,
}).$mount("#root");
