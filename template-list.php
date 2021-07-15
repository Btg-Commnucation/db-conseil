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
        <section class="hero-banner">
            <div class="container">
                <h1><?php the_field('main_title'); ?></h1>
                <form action="">
                    <select name="categorie" id="categorie" aria-label="Quelle catégorie de poste ?">
                        <option value="">Catégorie</option>
                        <option v-for="categorie in filteredCategory" value="categorie">{{categorie}}</option>
                    </select>
                    <select name="region" id="region" aria-label="Dans quelle région recherchez-vous ?">
                        <option value="">Région</option>
                        <option v-for="region in filteredRegion" value="region">{{region}}</option>
                    </select>
                    <input type="text" name="post-type" id="post-type" placeholder="Intitulé du poste" aria-label="Intitulé du poste">
                    <input type="submit" value="">
                </form>
            </div>
        </section>
        <section class="job"></section>
    </script>
</main>
<?php get_footer(); ?>
