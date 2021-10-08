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
      return this.api.filter((job) => {
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
        return this.api
          .slice(this.sliceA, this.sliceB)
          .sort((a, b) => Date.parse(b.cdate) - Date.parse(a.cdate));
      } else {
        return this.api
          .slice(0, 4)
          .sort((a, b) => Date.parse(b.cdate) - Date.parse(a.cdate));
      }
    },

    filteredCategory() {
      this.api.map((job) => {
        this.industryNumber.push(job.industry);
      });
      this.industryNumber.sort();
      this.industryNumber = [...new Set(this.industryNumber)];
      this.industryNumber.map((number) => {
        return this.categorie.push(this.industriesCategory(number));
      });
      return this.categorie;
    },

    filteredRegion() {
      this.api.map((job) => {
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
  mounted() {
    if (localStorage.getItem("Data")) {
      if (localStorage.getItem("Data") == JSON.stringify(jsonApi.data)) {
        this.api = JSON.parse(localStorage.getItem("Data"));
        this.loading = false;
      } else {
        const tempArray = jsonApi.data;
        let tempArray2 = [];
        tempArray.map((job) => {
          if (parseInt(job.active) > 0) {
            tempArray2.push(job);
          }
        });
        this.api = tempArray2;
        localStorage.setItem("Data", JSON.stringify(jsonApi.data));
        this.loading = false;
      }
    }
    const tempArray = jsonApi.data;
    let tempArray2 = [];
    tempArray.map((job) => {
      if (parseInt(job.active) > 0) {
        tempArray2.push(job);
      }
    });
    this.api = tempArray2;
    localStorage.setItem("Data", JSON.stringify(jsonApi.data));
    this.loading = false;
  },
  methods: {
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
        .filter((job) => {
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
      this.api.map((job) => {
        this.industryNumber.push(job.industry);
      });
      this.industryNumber.sort();
      this.industryNumber = [...new Set(this.industryNumber)];
      this.industryNumber.map((number) => {
        return this.categorie.push(this.industriesCategory(number));
      });
      return this.categorie;
    },

    filteredRegion() {
      this.api.map((job) => {
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
  mounted() {
    if (localStorage.getItem("Data")) {
      if (localStorage.getItem("Data") == JSON.stringify(jsonApi.data)) {
        this.api = JSON.parse(localStorage.getItem("Data"));
        this.loading = false;
      } else {
        const tempArray = jsonApi.data;
        let tempArray2 = [];
        tempArray.map((job) => {
          if (parseInt(job.active) > 0) {
            tempArray2.push(job);
          }
        });
        this.api = tempArray2;
        localStorage.setItem("Data", JSON.stringify(jsonApi.data));
        this.loading = false;
      }
    }
    const tempArray = jsonApi.data;
    let tempArray2 = [];
    tempArray.map((job) => {
      if (parseInt(job.active) > 0) {
        tempArray2.push(job);
      }
    });
    this.api = tempArray2;
    localStorage.setItem("Data", JSON.stringify(jsonApi.data));
    this.loading = false;
  },
  methods: {
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
        case 94:
          return "Étude de marché";
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
  props: ["job"],
  template: "#description",
  name: "Description",
  data: () => {
    return {
      jobs: jsonApi.data,
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
      etudes: "",
      reference: "",
      postalCode: "",
      town: "",
      adresse: "",
      telephone: "",
      consent: false,
      formMessage: "",
      civilite: "",
      response: "",
      invalid: "",
    };
  },
  computed: {
    displayingOffer() {
      this.job != null
        ? (this.displayPost = this.job)
        : (this.displayPost = this.jobs[0]);
      return this.displayPost;
    },
    getRef() {
      this.reference = this.displayingOffer.reference;
    },
    filteredCategory() {
      this.jobs.map((job) => {
        this.industryNumber.push(job.industry);
      });
      this.industryNumber.sort();
      this.industryNumber = [...new Set(this.industryNumber)];
      this.industryNumber.map((number) => {
        return this.categorie.push(this.industriesCategory(number));
      });
      return this.categorie;
    },

    filteredRegion() {
      this.jobs.map((job) => {
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
  mounted() {
    if (localStorage.getItem("Data")) {
      if (localStorage.getItem("Data") == JSON.stringify(jsonApi.data)) {
        this.jobs = JSON.parse(localStorage.getItem("Data"));
        this.loading = false;
      } else {
        const tempArray = jsonApi.data;
        let tempArray2 = [];
        tempArray.map((job) => {
          if (parseInt(job.active) > 0) {
            tempArray2.push(job);
          }
        });
        this.jobs = tempArray2;
        localStorage.setItem("Data", JSON.stringify(jsonApi.data));
        this.loading = false;
      }
    }
    const tempArray = jsonApi.data;
    let tempArray2 = [];
    tempArray.map((job) => {
      if (parseInt(job.active) > 0) {
        tempArray2.push(job);
      }
    });
    this.jobs = tempArray2;
    localStorage.setItem("Data", JSON.stringify(jsonApi.data));
    this.loading = false;
  },
  methods: {
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
        case 94:
          return "Étude de marché";
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
        bodyFormData.set("etudes", this.etudes);
        bodyFormData.set("ref", this.reference);
        bodyFormData.set("number-102", this.postalCode);
        bodyFormData.set("ville", this.town);
        bodyFormData.set("text-97", this.adresse);
        bodyFormData.set("telephone", this.telephone);
        bodyFormData.set("checkbox-411", this.consent);
        bodyFormData.set("checkbox-411", this.consent);
        bodyFormData.set("civilite", this.civilite);

        axios({
          method: "post",
          url: "https://www.db-conseils.com/wp-json/contact-form-7/v1/contact-forms/223/feedback",
          data: bodyFormData,
          config: { headers: { "Content-Type": "multipart/form-data" } },
        })
          .then((response) => {
            this.response = response.data.message;
            if (response.data.invalid_fields) {
              this.invalid = response.data.invalid_fields[0].message;
            }
            this.sent = true;
            this.nom = "";
            this.prenom = "";
            this.email = "";
            this.consent = false;
            this.adresse = "";
            this.telephone = "";
            this.town = "";
            this.files = "";
            this.etudes = "";
            this.formMessage = "";
            this.postalCode = "";
            this.civilite = "";
            return true;
          })
          .catch((error) => console.log(error));
      }
    },
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
    {
      path: "/Description",
      component: Description,
      name: "Description",
      props: true,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { x: 0, y: 120 };
    }
  },
});

const vue = new Vue({
  router,
}).$mount("#root");
