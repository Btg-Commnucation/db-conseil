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
      showAll: false,
      pageNumber: 0,
      pagination: [],
      i: 1,
      currentPage: 1,
      sliceA: 0,
      sliceB: 8,
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
    pageCount() {
      this.pageNumber = Math.ceil(this.api.length / 8);
      while (this.i <= this.pageNumber) {
        this.pagination.push(this.i);
        this.i = this.i + 1;
      }
      return this.pagination;
    },
  },
  methods: {
    nextPage(page) {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
      if (this.currentPage < page) {
        this.sliceA = this.sliceA + 8 * (page - this.currentPage);
        this.sliceB = this.sliceB + 8 * (page - this.currentPage);
        this.currentPage = page;
      } else if (this.currentPage > page) {
        this.sliceA = this.sliceA - 8 * (this.currentPage - page);
        this.sliceB = this.sliceB - 8 * (this.currentPage - page);
        this.currentPage = page;
      }
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
