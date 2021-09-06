<?php /*

Template Name: Liste de job

*/
get_header();
?>
<main class="list-page">
    <div id="root">
        <div class="display-none">
            <router-link to="/">
                <p>Home</p>
            </router-link>
            <router-link to="/Resultats">
                <p>Résultats</p>
            </router-link>
            <router-link to="Description">
                <p>Description</p>
            </router-link>
        </div>
        <transition name="component-fade" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
    <script type="text/x-template" id="home">
        <div v-if="!loading">
            <section class="hero-banner">
                <div class="background-image"></div>
                <div class="gradient">
                    <div class="container">
                        <h1><?php the_field('main_title'); ?></h1>
                        <div class="job-container">
                            <h2><?php the_field('titre_barre_recherche'); ?></h2>
                            <form v-on:submit.prevent="onSubmit">
                                <div class="select">
                                    <select v-model="searchCategorie" name="categorie" id="categorie" aria-label="Quelle catégorie de poste ?">
                                        <option value="">Catégorie</option>
                                        <option class="deroulant" v-for="categorie in filteredCategory" v-bind:value="categorie">{{categorie}}</option>
                                    </select>
                                </div>
                                <div class="select">
                                    <select v-model="searchRegion" name="region" id="region" aria-label="Dans quelle région recherchez-vous ?">
                                        <option value="">Région</option>
                                        <option class="deroulant" v-for="region in filteredRegion" v-bind:value="region">{{region}}</option>
                                    </select>
                                </div>
                                <input v-model="searchJobType" type="text" name="post-type" id="post-type" placeholder="Intitulé du poste" aria-label="Intitulé du poste" autocomplete="off">
                                <router-link :to="{ name: 'Resultats', params: { searchCategorie, searchRegion, searchJobType }}" class="rechercher-job" ><?php the_field('texte_bouton_rechercher'); ?></router-link>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <section class="job symbols-offer">
                <div class="container">
                    <h2><?php the_field('titre_carte'); ?></h2>
                    <div class="card-container">
                        <div v-for='job in slicePost' class="card">
                            <strong>{{job.address_state}}</strong>
                            <div class="card-detail">
                                <p class="categorie">{{industriesCategory(job.industry)}}</p>
                                <h3>{{job.label}}</h3>
                                <p v-if="job.description.length<208" v-html="job.description"></p>
                                <p v-else v-html="job.description.substring(0, 208) + '...'"></p>
                                <router-link class="card-link" :to="{ name: 'Description', params: { job } }">En savoir plus</router-link>
                            </div>
                        </div>
                    </div>
                    <button v-if="!showAll" v-on:click="showAll = !showAll" class="see-all__button">Voir toutes nos offres</button>
                    <ul v-if="showAll"  class="pagination">
                        <li v-for="page in pageCount" v-on:click="nextPage(page)" :class="activePage(page)">{{page}}</li>
                    </ul>
                </div>
            </section>
        </div>
    </script>
    
    <?php get_template_part("layout/resultats"); ?>
    <?php get_template_part("layout/description"); ?>
    
</main>
<?php get_footer(); ?>
