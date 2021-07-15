<?php /*

Template Name: Liste de job

*/
get_header();
?>
<main class="list-page">
    <div id="root">
        <div class="display-none">
            <router-link to="/">
                <h2>Home</h2>
            </router-link>
            <router-link to="/Resultats">
                <h2>Résultats</h2>
            </router-link>
            <router-link to="Description">
                <h2>Description</h2>
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
