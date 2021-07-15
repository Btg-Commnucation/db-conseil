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
        <router-view></router-view>
    </div>
    <script type="text/x-template" id="home">
        <div>
            <section class="hero-banner">
                <div class="background-image"></div>
                <div class="gradient">
                    <div class="container">
                        <h1><?php the_field('main_title'); ?></h1>
                        <div class="job-container">
                            <h2><?php the_field('titre_barre_recherche'); ?></h2>
                            <form action="">
                                <select v-model="searchCategorie" name="categorie" id="categorie" aria-label="Quelle catégorie de poste ?">
                                    <option value="">Catégorie</option>
                                    <option v-for="categorie in filteredCategory" v-bind:value="categorie">{{categorie}}</option>
                                </select>
                                <select v-model="searchRegion" name="region" id="region" aria-label="Dans quelle région recherchez-vous ?">
                                    <option value="">Région</option>
                                    <option v-for="region in filteredRegion" v-bind:value="region">{{region}}</option>
                                </select>
                                <input v-model="searchJobType" type="text" name="post-type" id="post-type" placeholder="Intitulé du poste" aria-label="Intitulé du poste">
                                <router-link class="rechercher-job" to="{ name: 'Resultats', params: { searchCaterogie, searchRegion, searchJobType } }"><?php the_field('texte_bouton_rechercher'); ?></router-link>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <section class="job"></section>
        </div>
    </script>
</main>
<?php get_footer(); ?>
