const Home = {
  template: "#home",
  name: "Home",
  data: () => {
    return {
      api: null,
      categorie: [],
      industryNumber: [],
      region: [],
      searchCategorie: "",
      loading: true,
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
      return this.api.filter(job => {
        if (parseInt(job.active) > 0) {
          return (
            job.label
              .toLowerCase()
              .includes(this.searchJobType.toLowerCase()) &&
            this.industriesCategory(job.industry)
              .toLowerCase()
              .includes(this.searchCategorie.toLowerCase()) &&
            job.address_state
              .toLowerCase()
              .includes(this.searchRegion.toLowerCase())
          );
        }
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
      this.api.map(job => {
        this.industryNumber.push(job.industry);
      });
      this.industryNumber.sort();
      this.industryNumber = [...new Set(this.industryNumber)];
      this.industryNumber.map(number => {
        return this.categorie.push(this.industriesCategory(number));
      });
      return this.categorie;
    },

    filteredRegion() {
      this.api.map(job => {
        this.region.push(job.address_state);
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
  async mounted() {
    await this.fetchData();
    this.api = this.api.sort(
        (a, b) => Date.parse(b.cdate) - Date.parse(a.cdate)
    );
    this.loading = false;
  },
  methods: {
    fetchData() {
      const tempArray = jsonApi.data;
      let tempArray2 = [];
      tempArray.map(job => {
        if ( job.status !== "3" ) {
          tempArray2.push(job);
        }
      });
      this.api = tempArray2;
    },
    industriesCategory(number) {
      switch (parseInt(number)) {
        case 48:
          return "Construction";
        case 94:
          return "Aviation";
        case 50:
          return "Architecture";
        case 52:
          return "Aviation et Aérospacial";
        case 112:
          return "Production d'électrivité";
        case 144:
          return "Envivonement et énergies renouvelables";
        case 44:
          return "Immobilier et chantier urbain";
        case 116:
          return "Logistique";
        case 11:
          return "Consulting";
        case 49:
          return "Matériaux de construction";
        case 62:
          return "Chemin de fer";
        case 137:
          return "Ressources humaines";
        case 97:
          return "Étude de marché";
        case 72:
          return "Bureau législatif";
        case 122:
          return "Installations et Services";
        case 1001:
          return "Génie Electrique";
        case 1000:
          return "Infrastructure / Réseaux";
        case 1002:
          return "Génie Climatique";
        default:
          return "Autre";
      }
    },
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
const Offres = {
  template: "#offres",
  name: "Offres",
  data: () => {
    return {
      api: [],
      categorie: [],
      industryNumber: [],
      region: [],
      searchCategorie: "",
      loading: true,
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
      return this.api.filter(job => {
        if (parseInt(job.active) > 0) {
          return (
            job.label
              .toLowerCase()
              .includes(this.searchJobType.toLowerCase()) &&
            this.industriesCategory(job.industry)
              .toLowerCase()
              .includes(this.searchCategorie.toLowerCase()) &&
            job.address_state
              .toLowerCase()
              .includes(this.searchRegion.toLowerCase())
          );
        }
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
      this.api.map(job => {
        this.industryNumber.push(job.industry);
      });
      this.industryNumber.sort();
      this.industryNumber = [...new Set(this.industryNumber)];
      this.industryNumber.map(number => {
        return this.categorie.push(this.industriesCategory(number));
      });
      return this.categorie;
    },

    filteredRegion() {
      this.api.map(job => {
        this.region.push(job.address_state);
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
  async mounted() {
    await this.fetchData();
    this.api = this.api.sort(
      (a, b) => Date.parse(b.cdate) - Date.parse(a.cdate)
    );
    this.loading = false;
  },
  methods: {
    fetchData() {
      const tempArray = jsonApi.data;
      let tempArray2 = [];
      tempArray.map(job => {
        if ( job.status !== "3" ) {
          tempArray2.push(job);
        }
      });
      this.api = tempArray2;
    },
    industriesCategory(number) {
      switch (parseInt(number)) {
        case 48:
          return "Construction";
        case 94:
          return "Aviation";
        case 50:
          return "Architecture";
        case 52:
          return "Aviation et Aérospacial";
        case 112:
          return "Production d'électrivité";
        case 144:
          return "Envivonement et énergies renouvelables";
        case 44:
          return "Immobilier et chantier urbain";
        case 116:
          return "Logistique";
        case 11:
          return "Consulting";
        case 49:
          return "Matériaux de construction";
        case 62:
          return "Chemin de fer";
        case 137:
          return "Ressources humaines";
        case 97:
          return "Étude de marché";
        case 72:
          return "Bureau législatif";
        case 122:
          return "Installations et Services";
        case 1001:
          return "Génie Electrique";
        case 1000:
          return "Infrastructure / Réseaux";
        case 1002:
          return "Génie Climatique";
        default:
          return "Autre";
      }
    },
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
const Postule = {
  template: "#postule",
  name: "Postule",
  data: () => {
    return {
      api: null,
      categorie: [],
      industryNumber: [],
      region: [],
      searchCategorie: "",
      loading: true,
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
      return this.api.filter(job => {
        if (parseInt(job.active) > 0) {
          return (
              job.label
                  .toLowerCase()
                  .includes(this.searchJobType.toLowerCase()) &&
              this.industriesCategory(job.industry)
                  .toLowerCase()
                  .includes(this.searchCategorie.toLowerCase()) &&
              job.address_state
                  .toLowerCase()
                  .includes(this.searchRegion.toLowerCase())
          );
        }
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
      this.api.map(job => {
        this.industryNumber.push(job.industry);
      });
      this.industryNumber.sort();
      this.industryNumber = [...new Set(this.industryNumber)];
      this.industryNumber.map(number => {
        return this.categorie.push(this.industriesCategory(number));
      });
      return this.categorie;
    },

    filteredRegion() {
      this.api.map(job => {
        this.region.push(job.address_state);
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
  async mounted() {
    await this.fetchData();
    this.api = this.api.sort(
        (a, b) => Date.parse(b.cdate) - Date.parse(a.cdate)
    );
    this.loading = false;
  },
  methods: {
    fetchData() {
      const tempArray = jsonApi.data;
      let tempArray2 = [];
      tempArray.map(job => {
        if ( job.status !== "3" ) {
          tempArray2.push(job);
        }
      });
      this.api = tempArray2;
    },
    industriesCategory(number) {
      switch (parseInt(number)) {
        case 48:
          return "Construction";
        case 94:
          return "Aviation";
        case 50:
          return "Architecture";
        case 52:
          return "Aviation et Aérospacial";
        case 112:
          return "Production d'électrivité";
        case 144:
          return "Envivonement et énergies renouvelables";
        case 44:
          return "Immobilier et chantier urbain";
        case 116:
          return "Logistique";
        case 11:
          return "Consulting";
        case 49:
          return "Matériaux de construction";
        case 62:
          return "Chemin de fer";
        case 137:
          return "Ressources humaines";
        case 97:
          return "Étude de marché";
        case 72:
          return "Bureau législatif";
        case 122:
          return "Installations et Services";
        case 1001:
          return "Génie Electrique";
        case 1000:
          return "Infrastructure / Réseaux";
        case 1002:
          return "Génie Climatique";
        default:
          return "Autre";
      }
    },
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
      api: null,
      categorie: [],
      region: [],
      loading: true,
      lookingCategorie: "",
      industryNumber: [],
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
      this.sliceA = 0;
      this.sliceB = 8;
      this.currentPage = 1;
      this.pagination = [];
      this.pageNumber = 0;

      window.scroll({
        top: 618,
        left: 0,
        behavior: "smooth",
      });

      return this.api
        .filter(job => {
          if (parseInt(job.active) > 0) {
            return (
              job.label
                .toLowerCase()
                .includes(this.lookingJobType.toLowerCase()) &&
              this.industriesCategory(job.industry)
                .toLowerCase()
                .includes(this.lookingCategorie.toLowerCase()) &&
              job.address_state
                .toLowerCase()
                .includes(this.lookingRegion.toLowerCase())
            );
          }
        })
        .sort((a, b) => Date.parse(b.cdate) - Date.parse(a.cdate));
    },

    filteredCategory() {
      this.api.map(job => {
        this.industryNumber.push(job.industry);
      });
      this.industryNumber.sort();
      this.industryNumber = [...new Set(this.industryNumber)];
      this.industryNumber.map(number => {
        return this.categorie.push(this.industriesCategory(number));
      });
      return this.categorie;
    },

    filteredRegion() {
      this.api.map(job => {
        this.region.push(job.address_state);
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
  async mounted() {
    await this.fetchData();
    this.api = this.api.sort(
        (a, b) => Date.parse(b.cdate) - Date.parse(a.cdate)
    );
    this.loading = false;
  },
  methods: {
    fetchData() {
      const tempArray = jsonApi.data;
      let tempArray2 = [];
      tempArray.map(job => {
        if ( job.status !== "3" ) {
          tempArray2.push(job);
        }
      });
      this.api = tempArray2;
    },
    industriesCategory(number) {
      switch (parseInt(number)) {
        case 48:
          return "Construction";
        case 94:
          return "Aviation";
        case 50:
          return "Architecture";
        case 52:
          return "Aviation et Aérospacial";
        case 112:
          return "Production d'électrivité";
        case 144:
          return "Envivonement et énergies renouvelables";
        case 44:
          return "Immobilier et chantier urbain";
        case 116:
          return "Logistique";
        case 11:
          return "Consulting";
        case 49:
          return "Matériaux de construction";
        case 62:
          return "Chemin de fer";
        case 137:
          return "Ressources humaines";
        case 97:
          return "Étude de marché";
        case 72:
          return "Bureau législatif";
        case 122:
          return "Installations et Services";
        case 1001:
          return "Génie Electrique";
        case 1000:
          return "Infrastructure / Réseaux";
        case 1002:
          return "Génie Climatique";
        default:
          return "Autre";
      }
    },
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
  template: "#description",
  name: "Description",
  data: () => {
    return {
      jobs: [],
      job: {},
      loading: true,
      displayPost: "",
      industryNumber: [],
      categorie: [],
      region: [],
      searchCategorie: "",
      searchRegion: "",
      searchJobType: "",
      startSearching: false,
      nom: "",
      prenom: "",
      email: "",
      sent: false,
      files: "",
      telephone: "",
      consent: false,
      formMessage: "",
      response: "",
      invalid: "",
    };
  },
  computed: {
    filteredCategory() {
      this.jobs.map(job => {
        this.industryNumber.push(job.industry);
      });
      this.industryNumber.sort();
      this.industryNumber = [...new Set(this.industryNumber)];
      this.industryNumber.map(number => {
        return this.categorie.push(this.industriesCategory(number));
      });
      return this.categorie;
    },

    filteredRegion() {
      this.jobs.map(job => {
        this.region.push(job.address_state);
      });
      this.region.sort();
      return (this.region = [...new Set(this.region)]);
    },
    dimension() {
      if (this.startSearching === false) {
        return "changeBottom";
      }
    },
  },
  async mounted() {
    await this.getData();
    document.title = this.job.label;
    const tempArray = jsonApi.data;
    let tempArray2 = [];
    tempArray.map(job => {
      if (parseInt(job.active) > 0) {
        tempArray2.push(job);
      }
    });
    this.jobs = tempArray2;
    this.loading = false;
  },
  methods: {
    getData() {
      if (this.$route.params.job) {
        this.job = JSON.parse(this.$route.params.job);
      } else {
        const data = jsonApi.data;
        data.map(job => {
          if (job.status !== "3" && job.reference.replace(/\s/g, '') === this.$route.params.reference) {
            this.job = job;
          }
        })
      }
    },
    handleFileUpload() {
      this.files = this.$refs.file.files[0];
    },
    industriesCategory(number) {
      switch (parseInt(number)) {
        case 48:
          return "Construction";
        case 94:
          return "Aviation";
        case 50:
          return "Architecture";
        case 52:
          return "Aviation et Aérospacial";
        case 112:
          return "Production d'électrivité";
        case 144:
          return "Envivonement et énergies renouvelables";
        case 44:
          return "Immobilier et chantier urbain";
        case 116:
          return "Logistique";
        case 11:
          return "Consulting";
        case 49:
          return "Matériaux de construction";
        case 62:
          return "Chemin de fer";
        case 137:
          return "Ressources humaines";
        case 97:
          return "Étude de marché";
        case 72:
          return "Bureau législatif";
        case 122:
          return "Installations et Services";
        case 1001:
          return "Génie Electrique";
        case 1000:
          return "Infrastructure / Réseaux";
        case 1002:
          return "Génie Climatique";
        default:
          return "Autre";
      }
    },
    showSearchForm() {
      return (this.startSearching = !this.startSearching);
    },

    validEmail(email) {
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },

    checkForm(e) {
      e.preventDefault();
      this.errors = [];

      if (!this.nom) {
        this.errors.push("Veuillez saisir votre nom.");
      }
      if (!this.email) {
        this.errors.push("Email requis.");
      } else if (!this.validEmail(this.email)) {
        this.errors.push("Un email valide est requis.");
      }
      if (!this.prenom) {
        this.errors.push("Veuillez saisir votre prénom.");
      }

      if (!this.errors.length) {
        const bodyFormData = new FormData();
        bodyFormData.set("Nom", this.nom);
        bodyFormData.set("Prnom", this.prenom);
        bodyFormData.set("email", this.email);
        bodyFormData.set("Joindredesfichiers", this.files);
        bodyFormData.set("textarea-999", this.formMessage);
        bodyFormData.set("ref", this.job.reference);
        bodyFormData.set("telephone", this.telephone);
        bodyFormData.set("checkbox-411", this.consent);

        axios({
          method: "post",
          url: "https://www.db-conseils.com/wp-json/contact-form-7/v1/contact-forms/223/feedback",
          data: bodyFormData,
          config: { headers: { "Content-Type": "multipart/form-data" } },
        })
          .then(response => {
            console.log(response)
            this.response = response.data.message;
            this.sent = true;
            this.nom = "";
            this.prenom = "";
            this.email = "";
            this.consent = false;
            this.telephone = "";
            this.formMessage = "";
            return true;
          })
          .catch(error => console.log(error));
      }
    },
  },
};

const routes = [
  { path: "/", component: Home, name: "Home" },
  { path: "/nos-offres", component: Offres, name: "Offres" },
  { path: "/je-postule", component: Postule, name: "Postule" },
  {
    path: "/Resultats",
    component: Resultats,
    name: "Resultats",
    props: true,
  },
  {
    path: "/poste/:reference",
    component: Description,
    name: "Description",
    props: true,
  },
];

const router = new VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to) {
      return { x: 0, y: 120 };
    }
  },
});

const vue = Vue.createApp({});

vue.use(router);
vue.mount("#root");
