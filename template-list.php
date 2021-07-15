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
    </div>
    <script type="text/x-template" id="home">
        <section class="hero-banner">
            <h1>Home</h1>
        </section>
        <section class="job"></section>
    </script>
</main>
<?php get_footer(); ?>
