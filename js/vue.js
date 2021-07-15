const Home = {
  template: "#home",
  name: "Home",
  data: () => {
    return {
      api: jsonApi.jobs,
      categorie: [],
      region: [],
      searchCategorie: "",
      searchRegion: "",
      searchJobType: "",
    };
  },
  computed: {
    filteredCategory() {
      this.api.map((job) => {
        this.categorie.push(job.category);
      });
      this.categorie.sort();
      return (this.categorie = [...new Set(this.categorie)]);
    },
    filteredRegion() {
      this.api.map((job) => {
        this.region.push(job.job_type);
      });
      this.region.sort();
      return (this.region = [...new Set(this.region)]);
    },
  },
};
const Resultats = {
  props: ["searchCaterogy", "searchRegion", "searchJobType"],
  template: "<h1>Resultats</h1>",
  name: "Resultats",
  data: () => {
    return {
      api: jsonApi.data,
    };
  },
};
const Description = {
  template: "<h1>Description</h1>",
  name: "Description",
  data: () => {
    return {
      api: jsonApi.data,
    };
  },
};

const router = new VueRouter({
  routes: [
    { path: "/", component: Home, name: "Home" },
    {
      path: "/Resultats",
      component: Resultats,
      name: "Resultats",
      props: true,
    },
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
