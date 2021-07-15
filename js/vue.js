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
    filteredList() {
      return this.data.filter((job) => {
        return (
          job.title.toLowerCase().includes(this.searchKey.toLowerCase()) &&
          job.category
            .toLowerCase()
            .includes(this.searchCategory.toLowerCase()) &&
          job.job_type.toLowerCase().includes(this.searchArea.toLowerCase())
        );
      });
    },
    slicePost() {
      if (this.showAll) {
        return this.api.slice(this.sliceA, this.sliceB);
      } else {
        return this.api.slice(0, 4);
      }
    },

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
    activePage(page) {
      if (this.currentPage == page) {
        return "active-page";
      }
    },
    nextPage(page) {
      window.scroll({
        top: 618,
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
  props: ["searchCategorie", "searchRegion", "searchJobType"],
  template: "#resultats",
  name: "Resultats",
  data: () => {
    return {
      api: jsonApi.jobs,
      categorie: [],
      region: [],
      lookingCategorie: "",
      lookingRegion: "",
      lookingJobType: "",
      pageNumber: 0,
      pagination: [],
      currentPage: 1,
      sliceA: 0,
      sliceB: 8,
    };
  },
  computed: {
    filteredList() {
      this.lookingRegion = this.searchRegion != null ? this.searchRegion : "";
      this.lookingCategorie =
        this.searchCategorie != null ? this.searchCategorie : "";
      this.lookingJobType =
        this.searchJobType != null ? this.searchJobType : "";

      return this.api.filter((job) => {
        return (
          job.title.toLowerCase().includes(this.lookingJobType.toLowerCase()) &&
          job.category
            .toLowerCase()
            .includes(this.lookingCategorie.toLowerCase()) &&
          job.job_type.toLowerCase().includes(this.lookingRegion.toLowerCase())
        );
      });
    },

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
      this.pageNumber = Math.ceil(this.filteredList.length / 8);
      if (this.pagination.length > this.pageNumber) {
        let width = this.pagination.length - this.pageNumber;
        let y = 0;
        while (y <= width) {
          this.pagination.pop();
          y = y + 1;
        }
        return this.pagination;
      } else {
        let i = 1;
        while (i <= this.pageNumber) {
          this.pagination.push(i);
          i = i + 1;
        }
        return this.pagination;
      }
    },
  },
  methods: {
    activePage(page) {
      if (this.currentPage == page) {
        return "active-page";
      }
    },

    nextPage(page) {
      window.scroll({
        top: 618,
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
